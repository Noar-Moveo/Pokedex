import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=151";

export const usePokemonData = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(API_URL);
                setData(response.data.results);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return { data, loading, error };

}