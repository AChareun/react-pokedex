import React from 'react'
import {useItemPageContext} from "../../context/itemPageContext";
import {ReducerActions} from "../../typings/reducer.d";

const Paginator:React.FC = (props) => {
    const { state, dispatch } = useItemPageContext();

    const changePage = (newUrl: string | null): void => {
        if (newUrl) {
            dispatch({
                type: ReducerActions.ChangePage,
                payload: { currentPage: newUrl }
            })
        }
        return
    };

    return (
        <div>
            <button onClick={() => changePage(state.previous)} >Prev</button>
            <button onClick={() => changePage(state.next)} >Next</button>
        </div>
    )
}

export default Paginator
