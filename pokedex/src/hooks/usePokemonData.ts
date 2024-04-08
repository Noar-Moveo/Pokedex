import { useState, useEffect } from "react";
import axios from "axios";
import { Pokemon, UsePokemonDataReturn, ErrorType, API_URL } from "../data/types"

export const usePokemonData = (): UsePokemonDataReturn => {
    const [data, setData] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<ErrorType>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(API_URL);
                const transformedData = response.data.results.map((pokemon: any) => {
                    const id = pokemon.url.split('/').filter(Boolean).pop();
                    return {
                        ...pokemon,
                        id: Number(id),
                        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
                    };
                });
                setData(transformedData);
            } catch (error) {
                setError(error as Error); // Cast error to ErrorType
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
}