import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getPokemonLocation,
  generateRandomPokemonLocation,
} from "../utils/locationUtils";
import MapComponent from "../components/PokemonMap";
import {
  LocationContainer,
  LocationHeader,
  CoordinatesText,
  StyledLink,
} from "../styles/PokemonLocationStyles";
import BallIcon from "../assets/pokemonIcon.png";
import MoveoIcon from "../assets/DestinationIcon.png";
import { center } from "../data/LocationTypes";

const PokemonLocationPage = () => {
  const { id } = useParams<{ id: string }>();
  const [pokemonLocation, setPokemonLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [isLoadedMap, setIsLoadedMap] = useState(false);

  useEffect(() => {
    const fetchLocation = async () => {
      if (id) {
        const location = await getPokemonLocation(
          id,
          generateRandomPokemonLocation
        );
        setPokemonLocation(location);
        setIsLoadedMap(true);
      }
    };

    fetchLocation();
  }, [id]);

  if (!id) {
    return <div>Error: No Pokémon ID provided!</div>;
  }

  if (!pokemonLocation) {
    return <div>Loading location...</div>;
  }

  return (
    <LocationContainer>
      <LocationHeader>Pokémon Location</LocationHeader>
      <MapComponent
        isLoadedMap={isLoadedMap}
        center={center}
        pokemonLocation={pokemonLocation}
        pokemonIcon={BallIcon}
        moveoIcon={MoveoIcon}
      />
      <StyledLink to={`/pokemon/${id}`}>Back to Pokémon Details</StyledLink>
      <StyledLink to="/">Back to Home</StyledLink>
    </LocationContainer>
  );
};

export default PokemonLocationPage;
