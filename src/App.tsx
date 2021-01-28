import React from "react";

import styles from "./App.module.scss";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import ItemList from "./component/ItemList/ItemList";
import Paginator from "./component/Paginator/Paginator";
import { ItemPageProvider } from "./context/itemPageContext";

function App() {
	return (
		<div className={styles["App"]}>
			<Header />
			<ItemPageProvider>
				<Paginator />
				<ItemList />
			</ItemPageProvider>
			<Footer />
		</div>
	);
}

export default App;
