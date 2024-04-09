import React, { useState } from "react";
import { usePokemonData } from "../hooks/usePokemonData";
import PokemonCard from "./PokemonCard";
import { ListContainer } from "../styles/PokemonCardStyles";
import { LoadMoreButton } from "../styles/HomePageStyles";
import { PokemonListProps, Pokemon } from "../data/types";

const PokemonList: React.FC<PokemonListProps> = ({ searchTerm }) => {
  const { data: pokemons, loading, error } = usePokemonData();
  const [displayLimit, setDisplayLimit] = useState(12);

  const filteredPokemons = searchTerm
    ? pokemons
        .filter((pokemon: Pokemon) =>
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, displayLimit)
    : pokemons.slice(0, displayLimit);

  const handleLoadMore = () => {
    setDisplayLimit((prevLimit) => prevLimit + 12);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <>
      <ListContainer>
        {filteredPokemons.map((pokemon: Pokemon) => (
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
