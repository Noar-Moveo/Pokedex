import { useState, useEffect, useMemo } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import axios from "axios";
import {
  PokemonDetails,
  ErrorType,
  FlavorTextEntry,
  SpeciesResponse,
  typeColors,
} from "../data/types";
import {
  DetailContainer,
  DetailHeader,
  TypeContainer,
  PokemonImage,
  VerticalLine,
  DescriptionHeadline,
  DescriptionText,
  StatsHeadline,
  StatsContainer,
  StatItem,
  BackButton,
  ArrowIndicator,
  Number,
  TypeBox,
  ImageHeaderContainer,
  DirectionsButton,
} from "../styles/PokemonDetailStyles";
//import { useRandomLocation } from "../hooks/useRandomLocation";
import { useNavigate } from "react-router-dom";

const PokemonDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetails | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ErrorType>(null);
  //const location = useRandomLocation();

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

  const getTypeColor = (typeName: string): string => {
    return typeColors[typeName.toLowerCase()];
  };

  const getTypeBox = (typeName: string) => {
    return (
      <TypeBox
        key={typeName}
        style={{ backgroundColor: getTypeColor(typeName) }}
      >
        {typeName.charAt(0).toUpperCase() + typeName.slice(1).toLowerCase()}
      </TypeBox>
    );
  };

  const formatStatName = (name: string) => {
    return name.toLowerCase() === "hp"
      ? "HP"
      : name
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
  };

  
  
  return (
    <>
      <DetailContainer>
        <ImageHeaderContainer>
          <DetailHeader>{pokemonDetail.name.toUpperCase()}</DetailHeader>
          <PokemonImage
            src={pokemonDetail.sprites.front_default}
            alt={pokemonDetail.name}
            draggable="false"
          />
          <TypeContainer>
            {pokemonDetail.types.map((typeInfo) =>
              getTypeBox(typeInfo.type.name)
            )}
          </TypeContainer>
        </ImageHeaderContainer>
        <DescriptionHeadline>Description</DescriptionHeadline>
        <DescriptionText>{pokemonDetail.description}</DescriptionText>
        <StatsHeadline>Stats</StatsHeadline>
        <StatsContainer>
          {pokemonDetail.stats.map((stat, index) => (
            <StatItem key={index}>
              <span>{formatStatName(stat.stat.name)}: </span>
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
      <Outlet /> 
      <DirectionsButton onClick={() => navigate(`/pokemon/${id}/location`)}>Show Direction</DirectionsButton>
    </>
  );
};

export default PokemonDetailPage;
