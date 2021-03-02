import React from 'react';
import {useLocation} from 'react-router-dom';

import {IPokemon} from "../../typings/general";
import PokemonImg from '../PokemonImg/PokemonImg';
import PokemonType from "../PokemonType/PokemonType";

import styles from "./PokemonView.module.scss";

const PokemonView: React.FC = (props) => {
    const location = useLocation<{pokemon: IPokemon}>();
    const { pokemon } = location.state;

    return (
        <React.Fragment>
            <h1 className={styles['title']}>{pokemon.name}</h1>
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
};

export default PokemonView;