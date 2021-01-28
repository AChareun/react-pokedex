import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types'

import styles from "./ItemList.module.scss";
import Item from "../Item/Item";
import { useItemPageContext } from "../../context/itemPageContext";
import { ReducerActions } from "../../typings/reducer.d";

const ItemList: React.FC = () => {
	const { state, dispatch } = useItemPageContext();
	const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

	const fetchData = async (): Promise<void> => {
		const data = await fetch(url).then((r) => r.json());

		const { results: itemList, previous, next } = data;

		dispatch({
			type: ReducerActions.ChangePage,
			payload: { itemList, previous, next },
		});
	};

	const changePage = (newUrl: string | null): void => {
        if (newUrl) {
            setUrl(newUrl);
        }

        return
	};

	useEffect(() => {
		fetchData();
	}, [url]);

	return (
		<React.Fragment>
            <div>
                <button onClick={() => changePage(state.previous)} >Prev</button>
                <button onClick={() => changePage(state.next)} >Next</button>
            </div>
			<section className={styles["Item-list"]}>
				{state.itemList?.map((item, index) => {
					const { name, url } = item;
					return <Item key={index} name={name} url={url} />;
				})}
			</section>
		</React.Fragment>
	);
};

ItemList.propTypes = {};

export default ItemList;
