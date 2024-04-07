//import React from "react";
import { usePokemonData } from '../hooks/usePokemonData.ts';

const PokemonList: React.FC = () => {
    const { data: pokemonList, loading, error } = usePokemonData();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
          {pokemonList.map((pokemon) => ( 
            <div>{pokemon.name}</div>
          ))}
        </div>
      );
    };
    
    export default PokemonList;