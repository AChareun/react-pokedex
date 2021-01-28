import React, { useEffect, useState } from "react";

import styles from "./Item.module.scss";

const Item: React.FC<{ name: string; url: string }> = (props) => {
	const [pokemon, setPokemon] = useState<{ sprites: {front_default: any} }>({
		sprites: {front_default: ''},
	});
	const { name, url } = props;

	const getPokemonData = async (): Promise<void> => {
		const pokemonData = await fetch(url).then((r) => r.json());

		setPokemon(pokemonData);
	};

	useEffect(() => {
		getPokemonData();
	}, [url]);

	const { sprites: {front_default: sprite} } = pokemon;

	return (
		<article className={styles["Item"]}>
			<img src={sprite} alt={name} />
			<div>
				<h4>{name}</h4>
			</div>
		</article>
	);
};

export default Item;
