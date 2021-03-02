import React, {useCallback, useEffect, useState} from "react";
import { Link } from "react-router-dom";

import styles from "./Item.module.scss";

const Item: React.FC<{ name: string; url: string }> = (props) => {
	const [pokemon, setPokemon] = useState<{ id: any, sprites: {front_default: any} }>({
		id: '',
		sprites: {front_default: ''},
	});
	const { name, url } = props;

	const getPokemonData = useCallback(async (): Promise<void> => {
		const pokemonData = await fetch(url).then((r) => r.json());

		setPokemon(pokemonData);
	}, [url]);

	useEffect(() => {
		getPokemonData().catch(e => console.log(e));
	}, [url, getPokemonData]);

	const { id, sprites: {front_default: sprite} } = pokemon;

	return (
		<article className={styles["Item"]}>
			<img src={sprite} alt={name} />
			<div>
				<h4>
					<Link to={{pathname: `/pokemon/${id}`, state: {pokemon}}}>
						{name}
					</Link>
				</h4>
			</div>
		</article>
	);
};

export default Item;
