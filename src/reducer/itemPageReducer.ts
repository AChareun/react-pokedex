import {ItemPageContextState} from "../typings/context.d";
import {ItemPageReducerActions, ReducerActions} from "../typings/reducer.d";

const itemPageReducer = (
	state: ItemPageContextState,
	action: ItemPageReducerActions
): ItemPageContextState => {
    switch (action.type) {
        case ReducerActions.ChangePage:
            const { currentPage } = action.payload;
            return {
                ...state,
                currentPage,
            }

        case ReducerActions.LoadPageData:
            const { itemList, next, previous, totalResults } = action.payload;

            return {
                ...state,
                itemList,
                next,
                previous,
                totalResults,
            }

        default:
            return state;
    }
};

export default itemPageReducer;
