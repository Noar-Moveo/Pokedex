import { useState, useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
  PokemonDetails,
  ErrorType,
  FlavorTextEntry,
  SpeciesResponse,
} from "../data/types";
import {
  DetailContainer,
  DetailHeader,
  TypeContainer,
  PokemonImage,
  GrassTypeBox,
  PoisonTypeBox,
  VerticalLine,
  DescriptionHeadline,
  DescriptionText,
  StatsHeadline,
  StatsContainer,
  StatItem,
  BackButton,
  ArrowIndicator,
  Number
} from "../styles/PokemonDetailStyles";


const PokemonDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetails | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ErrorType>(null);

  const formattedId = useMemo(() => {
    return `#${id?.toString().padStart(3, "0") || ""}`;
  }, [id]);
  

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        const descriptionResponse = await axios.get<SpeciesResponse>(
          `https://pokeapi.co/api/v2/pokemon-species/${id}`
        );
        const details: PokemonDetails = {
          ...response.data,
          description:
            descriptionResponse.data.flavor_text_entries
              .find((entry: FlavorTextEntry) => entry.language.name === "en")
              ?.flavor_text.replace(/\f/g, " ") || "",
        };

        setPokemonDetail(details);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPokemonDetails();
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!pokemonDetail) return <div>Pokemon not found</div>;

  const totalStats = pokemonDetail.stats.reduce(
    (total, stat) => total + stat.base_stat,
    0
  );


  return (
    <DetailContainer>
      <DetailHeader>{pokemonDetail.name.toUpperCase()}</DetailHeader>
      <PokemonImage
        src={pokemonDetail.sprites.front_default}
        alt={pokemonDetail.name}
        draggable="false"
      />
      <DescriptionHeadline>Description</DescriptionHeadline>
      <DescriptionText>{pokemonDetail.description}</DescriptionText>
      <TypeContainer>
        <GrassTypeBox>GRASS</GrassTypeBox>
        <PoisonTypeBox>POISON</PoisonTypeBox>
      </TypeContainer>
      <StatsHeadline>Stats</StatsHeadline>
      <StatsContainer>
        {pokemonDetail.stats.map((stat, index) => (
          <StatItem key={index}>
            <span>
              {stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}
              :{" "}
            </span>
            <span>{stat.base_stat}</span>
          </StatItem>
        ))}
        <StatItem>
          <span>Total:</span>
          <span>{totalStats}</span>
        </StatItem>
      </StatsContainer>
      <VerticalLine />
      <Link to="/">
        <BackButton>Home Page</BackButton>
      </Link>
      <ArrowIndicator>→</ArrowIndicator>
      <Number>{formattedId}</Number>
    </DetailContainer>
  );
};

export default PokemonDetailPage;
