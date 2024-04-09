export type ErrorType = Error | null;

export interface Pokemon {
    id: number;
    name: string;
    url: string;
    imageUrl: string;
    }

export interface UsePokemonDataReturn {
    data: Pokemon[];
    loading: boolean;
    error: ErrorType;
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
  