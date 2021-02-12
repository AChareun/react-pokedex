import React from 'react';
import { useParams } from 'react-router-dom';

import styles from "./PokemonView.module.scss";

const PokemonView: React.FC = (props) => {
    const { id } = useParams<{id: string | undefined}>();

    return (
        <h1>Page of Pokemon with ID: {id}</h1>
    )
};

export default PokemonView;