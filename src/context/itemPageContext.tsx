import React, { ReactNode, useContext, useReducer } from "react";
import itemPageReducer from "../reducer/itemPageReducer";
import { ItemPageContextState } from "../typings/context";

const contextInitialState: ItemPageContextState = {
	itemList: [],
	currentPage: null,
	previous: null,
	next: null,
	totalResults: 0,
};

const ItemPageContext = React.createContext<{
	state: ItemPageContextState;
	dispatch: React.Dispatch<any>;
}>({ state: contextInitialState, dispatch: () => null });

const useItemPageContext = () => {
	return useContext(ItemPageContext);
};

const ItemPageProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(itemPageReducer, contextInitialState);

	return (
		<ItemPageContext.Provider
			value={{
				state,
				dispatch,
			}}
		>
			{children}
		</ItemPageContext.Provider>
	);
};

export { useItemPageContext, ItemPageContext, ItemPageProvider };
