import { PageItem } from "./context";

type ActionMap<M extends { [index: string]: any }> = {
	[Key in keyof M]: M[Key] extends undefined
		? {
				type: Key;
		  }
		: {
				type: Key;
				payload: M[Key];
		  };
}

export enum ReducerActions {
	ChangePage = "CHANGE_PAGE",
	SetLoading = "SET_LOADING",
}

/**
 *
 * ItemPageReducer definitions
 *
 */

type ItemPagePayload = {
	[ReducerActions.ChangePage]: {
		itemList: PageItem[];
		previous: string | null;
		next: string | null;
	};
	[ReducerActions.SetLoading]: {
		isLoading: boolean;
	}
}

export type ItemPageReducerActions = ActionMap<ItemPagePayload>[keyof ActionMap<ItemPagePayload>];

/**
 ********************************************************************************
 */
