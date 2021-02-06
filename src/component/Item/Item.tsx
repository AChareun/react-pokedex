import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import styles from "./Item.module.scss";

const Item: React.FC<{ name: string; url: string }> = (props) => {
	const [pokemon, setPokemon] = useState<{ sprites: {front_default: any} }>({
		sprites: {front_default: ''},
	});
	const { name, url } = props;

	const match = useRouteMatch();

	const getPokemonData = async (): Promise<void> => {
		const pokemonData = await fetch(url).then((r) => r.json());

		setPokemon(pokemonData);
	};

	useEffect(() => {
		getPokemonData().catch(e => console.log(e));
	}, [url]);

	const { sprites: {front_default: sprite} } = pokemon;

	return (
		<article className={styles["Item"]}>
			<img src={sprite} alt={name} />
			<div>
				<h4>
					<Link to={`/pokemon`}>
						{name}
					</Link>
				</h4>
			</div>
		</article>
	);
};

export default Item;
