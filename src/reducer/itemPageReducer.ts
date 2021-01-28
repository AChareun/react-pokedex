import { ItemPageContextState } from "../typings/context.d";
import { ItemPageReducerActions, ReducerActions } from "../typings/reducer.d";

const itemPageReducer = (
	state: ItemPageContextState,
	action: ItemPageReducerActions
): ItemPageContextState => {
    switch (action.type) {
        case ReducerActions.ChangePage:
            const { itemList, previous, next } = action.payload;
            return {
                ...state,
                itemList,
                previous,
                next
            }

        default:
            break;
    }
	return state;
};

export default itemPageReducer;
