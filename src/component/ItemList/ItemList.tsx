import React, {useCallback, useEffect, useState} from "react";

import styles from "./ItemList.module.scss";
import Item from "../Item/Item";
import { useItemPageContext } from "../../context/itemPageContext";
import { ReducerActions } from "../../typings/reducer.d";

const ItemList: React.FC = () => {
	const { state, dispatch } = useItemPageContext();
	const [isLoading, setIsLoading] = useState(true);

	const fetchData = useCallback(async (): Promise<void> => {
		const urlToFetch = state.currentPage;
		const data = await fetch(urlToFetch).then((r) => r.json());

		const { results: itemList, previous, next, count: totalResults } = data;

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
