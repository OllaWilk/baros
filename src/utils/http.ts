import type { CocktailFull } from "../types/cocktails-types";

const apiUrl = import.meta.env.VITE_API_URL as string;

export const fetchCocktails = async (perPage = 500):Promise<CocktailFull[]> =>  {
    const response = await fetch (`${apiUrl}/cocktails?perPage=${perPage}`)
    
    if (!response.ok) {
        const error = new Error("Failed to fetch cocktails");
        throw error;
    }

    const json = await response.json();
    
    // const {data} = await response.json();
    return json.data as CocktailFull[]
}

