import React, {useCallback, useEffect, useState} from "react";
import { Link } from "react-router-dom";

import styles from "./Item.module.scss";
import {IPokemon} from "../../typings/general";
import PokemonType from "../PokemonType/PokemonType";

const Item: React.FC<{ name: string; url: string }> = (props) => {
	const [pokemon, setPokemon] = useState<IPokemon>();
	const { name, url } = props;

	const getPokemonData = useCallback(async (): Promise<void> => {
		const pokemonData = await fetch(url).then((r) => r.json());

		setPokemon(pokemonData);
	}, [url]);

	useEffect(() => {
		getPokemonData().catch(e => console.log(e));
	}, [url, getPokemonData]);

	if (pokemon) {
		const { id, sprites, types } = pokemon && pokemon;

		return (
			<article className={styles["Item"]}>
				<img src={sprites?.front_default || ''} alt={name} />
				<div>
					<h4>
						<Link to={{pathname: `/pokemon/${id}`, state: {pokemon}}}>
							{name}
						</Link>
					</h4>
				</div>
				<div>
					{types?.map((e, i) => {
						return (
							<PokemonType name={e.type.name} key={i}/>
						)
					})}
				</div>
			</article>
		);
	}

	return <React.Fragment></React.Fragment>

};

export default Item;
