import React, { useState, useEffect } from "react";
import { usePokemonData } from "../hooks/usePokemonData";
import PokemonCard from "./PokemonCard";
import { ListContainer, LoadMoreButton } from "../styles/HomePageStyles";
import { PokemonListProps } from "../data/types";

const PokemonList: React.FC<PokemonListProps> = ({ searchTerm }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  const [displayLimit, setDisplayLimit] = useState(isMobile ? 4 : 12);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setDisplayLimit(window.innerWidth < 768 ? 4 : 12);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { data, loading, error } = usePokemonData(); 
  const pokemons = Array.isArray(data) ? data : [];

  const filteredPokemons = searchTerm
    ? pokemons.filter((pokemon) => {
        const searchTermLower = searchTerm.toLowerCase();
        const nameMatch = pokemon.name.toLowerCase().includes(searchTermLower);
        const idMatch = pokemon.id.toString().includes(searchTermLower);
        const typeMatch = pokemon.types?.some(type => 
          type.type.name.toLowerCase().includes(searchTermLower)
        ) || false;

        return nameMatch || idMatch || typeMatch;
      }).slice(0, displayLimit)
    : pokemons.slice(0, displayLimit);

  const handleLoadMore = () => {
    setDisplayLimit((prevLimit) => prevLimit + (isMobile ? 4 : 12));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <>
      <ListContainer>
        {filteredPokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            imageUrl={pokemon.imageUrl}
            url={pokemon.url}
          />
        ))}
      </ListContainer>
      {pokemons.length > displayLimit && (
        <LoadMoreButton onClick={handleLoadMore}>Load More...</LoadMoreButton>
      )}
    </>
  );
};

export default PokemonList;
