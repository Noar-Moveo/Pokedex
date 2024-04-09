export type ErrorType = Error | null;

export interface Pokemon {
    id: number;
    name: string;
    url: string;
    imageUrl: string;
    }

export interface UsePokemonDataReturn {
    data: Pokemon | Pokemon[];
    loading: boolean;
    error: ErrorType;
    fetchPokemonDetails: (id: number) => Promise<PokemonDetail>;
  }

export const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=100000";


 export interface PokemonListProps {
    searchTerm: string;
  }

  export interface RecentSearchesProps {
    searches: string[];
    onDelete: (searchTerm: string) => void;
    onSelect: (searchTerm: string) => void;
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