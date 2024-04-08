export type ErrorType = Error | null;

export interface Pokemon {
    name: string;
    url: string;
}

export interface UsePokemonDataReturn {
    data: Pokemon[];
    loading: boolean;
    error: ErrorType;
}

export const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=100000";