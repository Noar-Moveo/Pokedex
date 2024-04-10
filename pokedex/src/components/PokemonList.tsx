import React, { useState } from "react";
import { usePokemonData } from "../hooks/usePokemonData";
import PokemonCard from "./PokemonCard";
import { ListContainer } from "../styles/PokemonCardStyles";
import { LoadMoreButton } from "../styles/HomePageStyles";
import { PokemonListProps } from "../data/types";

const PokemonList: React.FC<PokemonListProps> = ({ searchTerm }) => {
  const { data, loading, error } = usePokemonData(); 
  const [displayLimit, setDisplayLimit] = useState(12);

  const pokemons = Array.isArray(data) ? data : [];

  const filteredPokemons = searchTerm
  ? pokemons.filter((pokemon) => {
      const searchTermLower = searchTerm.toLowerCase();
      const nameMatch = pokemon.name.toLowerCase().includes(searchTermLower);
      const idMatch = pokemon.id.toString().includes(searchTermLower);
      const typeMatch = pokemon.types?.some(type => {
         type.type.name.toLowerCase().includes(searchTermLower);
      }) || false;
      

      return nameMatch || idMatch || typeMatch;
    })
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

