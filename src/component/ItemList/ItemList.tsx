import React, {useCallback, useEffect, useState} from "react";

import styles from "./ItemList.module.scss";
import Item from "../Item/Item";
import { useItemPageContext } from "../../context/itemPageContext";
import { ReducerActions } from "../../typings/reducer.d";
import {getPokemonPage} from "../../adapters/pokeapi";

const ItemList: React.FC = () => {
	const { state, dispatch } = useItemPageContext();
	const [isLoading, setIsLoading] = useState(true);

	const fetchData = useCallback(async (): Promise<void> => {
		const itemsPerPage = 20;
		const page = state.currentPage;
		const data: any = await getPokemonPage(itemsPerPage, (page - 1) * itemsPerPage);

		const { results: itemList, previous, next, count: totalResults } = data?.data;

		dispatch({
			type: ReducerActions.LoadPageData,
			payload: { itemList, previous, next, totalResults },
		});
	}, [state.currentPage, dispatch]);

	useEffect(() => {
		setIsLoading(true);
		fetchData().then(r => {
			setIsLoading(false);
		});
	}, [state.currentPage, fetchData]);

	return (
		<React.Fragment>
			<section className={styles["Item-list"]}>
				{isLoading ? <h2>Loading...</h2> : state.itemList?.map((item, index) => {
					const { name, url } = item;
					return <Item key={index} name={name} url={url} />;
				})}
			</section>
		</React.Fragment>
	);
};

export default ItemList;
