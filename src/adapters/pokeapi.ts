import { get } from './index';
import {AxiosResponse} from "axios";

export async function getPokemonPage(url: string): Promise<AxiosResponse<any>>
export async function getPokemonPage(limit: number, offset: number): Promise<AxiosResponse<any>>
export async function getPokemonPage(...params: any[]) {
    if (params.length > 1) {
        const [limit, offset] = params;
        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        return await get(url);
    } else {
        const [url] = params;
        return await get(url);
    }
}

export async function getPokemon(url:string): Promise<AxiosResponse<any>>
export async function getPokemon(id: number): Promise<AxiosResponse<any>>
export async function getPokemon(param: string | number) {
    let url: string;
    if (typeof param === "number") {
        url = `https://pokeapi.co/api/v2/pokemon/${param}`;
    } else {
        url = param;
    }
    return await get(url);
}
