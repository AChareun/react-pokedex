import {IApiPokemon, IPokemon} from "../typings/general";
import {Pokemon} from "./pokemon";

export function fromApiResponseToEntity(data: IApiPokemon): IPokemon {
    const {
        abilities,
        name,
        height,
        weight,
        types,
        id,
        sprites: {
            front_default: front_male_default,
            back_default: back_male_default,
            front_shiny: front_male_shiny,
            back_shiny: back_male_shiny,
            front_female: front_female_default,
            back_female: back_female_default,
            front_shiny_female: front_female_shiny,
            back_shiny_female: back_female_shiny,
        }
    }: IApiPokemon = data;

    return new Pokemon({
        abilities,
        name,
        height,
        id,
        types,
        weight,
        sprites: {
            front_male_default,
            back_male_default,
            front_male_shiny,
            back_male_shiny,
            front_female_default,
            back_female_default,
            front_female_shiny,
            back_female_shiny
        }
    });
}