import React from "react";
import { Switch, Route } from 'react-router-dom';

import styles from "./App.module.scss";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import ItemList from "./component/ItemList/ItemList";
import Paginator from "./component/Paginator/Paginator";
import { ItemPageProvider } from "./context/itemPageContext";
import PokemonView from "./component/PokemonView/PokemonView";

function App() {
	return (
		<div className={styles["App"]}>
			<Header />
				<Switch>
					<Route exact path="/">
						<ItemPageProvider>
							<Paginator />
							<ItemList />
						</ItemPageProvider>
					</Route>
					<Route path="/pokemon/:id">
						<PokemonView />
					</Route>
				</Switch>
			<Footer />
		</div>
	);
}

export default App;
