import  { ReactNode } from 'react';

export type ErrorType = Error | null;

export interface Pokemon {
    id: number;
    name: string;
    url: string;
    imageUrl: string;
    types?: PokemonType[];
    }

export interface UsePokemonDataReturn {
    data: Pokemon | Pokemon[];
    loading: boolean;
    error: ErrorType;
  }

export const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=100000";


 export interface PokemonListProps {
    searchTerm: string;
  }

  export interface Stat {
    base_stat: number;
    stat: { name: string };
  }
  
  export interface PokemonType {
    type: { name: string };
  }

  export interface PokemonDetail {
    id: number;
    name: string;
    stats: Stat[];
    types: PokemonType[];
    sprites: {
      front_default: string;
    };
  }
  
  export interface PokemonDetails extends PokemonDetail {
    description: string;
  }

  
  export interface FlavorTextEntry {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
    version: {
      name: string;
      url: string;
    };
  }
  
  export interface SpeciesResponse {
    flavor_text_entries: FlavorTextEntry[];
  }

  export type LayoutProps = {
    children: ReactNode;
  }

  export const typeColors: { [key: string]: string } = {
    normal:   '#A8A77A',
    fire:   '#EE8130',
    water:   '#6390F0',
    electric:   '#F7D02C',
    grass:   '#7AC74C',
    ice:   '#96D9D6',
    fighting:   '#C22E28',
    poison:   '#A33EA1',
    ground:   '#E2BF65',
    flying:   '#A98FF3',
    psychic:   '#F95587',
    bug:   '#A6B91A',
    rock:   '#B6A136',
    ghost:   '#735797',
    dragon:   '#6F35FC',
    dark:   '#705746',
    steel:   '#B7B7CE',
    fairy:   '#D685AD'

};
  