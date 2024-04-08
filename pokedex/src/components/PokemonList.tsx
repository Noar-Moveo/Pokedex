import React from 'react';
import { usePokemonData } from '../hooks/usePokemonData';
import PokemonCard from './PokemonCard';

const PokemonList: React.FC = () => {
  const { data: pokemons, loading, error } = usePokemonData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <div>
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} id={pokemon.id} name={pokemon.name} imageUrl={pokemon.imageUrl} />
      ))}
    </div>
  );
};

export default PokemonList;
