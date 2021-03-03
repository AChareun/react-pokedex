import React, {useCallback, useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';

import {IPokemon} from "../../typings/general";
import PokemonImg from '../PokemonImg/PokemonImg';
import PokemonType from "../PokemonType/PokemonType";

import styles from "./PokemonView.module.scss";
import {getPokemon} from "../../adapters/pokeapi";

const PokemonView: React.FC = (props) => {
    const { id } = useParams<{id: string}>();
    const location = useLocation<{pokemon: IPokemon}>();
    const [pokemon, setPokemon] = useState<IPokemon | undefined>(location.state?.pokemon);

    const getPokemonData = useCallback(async (): Promise<void> => {
        const {data: pokemonData} = await getPokemon(parseInt(id));

        console.log(pokemonData)
        setPokemon(pokemonData);
    }, [id]);

    useEffect(() => {
        getPokemonData().catch(e => console.log(e));
    }, [getPokemonData]);

    if (pokemon) {
        return (
            <React.Fragment>
                <h1 className={styles['title']}>{pokemon?.name}</h1>
                <p>
                    {pokemon.types?.map((e, i) => {
                        return (
                            <PokemonType name={e.type.name} key={i}/>
                        )
                    })}
                </p>
                <PokemonImg sprites={pokemon.sprites}/>
            </React.Fragment>
        )
    }

    return <React.Fragment></React.Fragment>
};

export default PokemonView;