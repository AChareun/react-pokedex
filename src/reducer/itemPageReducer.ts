import {ItemPageContextState} from "../typings/context.d";
import {ItemPageReducerActions, ReducerActions} from "../typings/reducer.d";

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
                next,
                isLoading: false,
            }

        case ReducerActions.SetLoading:
            const { isLoading } = action.payload;
            return {
                ...state,
                isLoading
            }

        default:
            return state;
            break;
    }
};

export default itemPageReducer;
