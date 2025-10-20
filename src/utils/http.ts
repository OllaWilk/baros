import type { CocktailFull } from "../types/cocktails-types";

const apiUrl = import.meta.env.VITE_API_URL;

export const fetchCocktails = async ():Promise<CocktailFull[]> =>  {
    const response = await fetch (apiUrl)
    
    if (!response.ok) {
        const error = new Error("Failed to fetch cocktails");
        throw error;
    }

    const {data} = await response.json();
    return data
}

