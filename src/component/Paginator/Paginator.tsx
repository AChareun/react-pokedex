import React from 'react'
import {useItemPageContext} from "../../context/itemPageContext";
import {ReducerActions} from "../../typings/reducer.d";
import _ from 'lodash';

const Paginator:React.FC = (props) => {
    const { state, dispatch } = useItemPageContext();
    const itemsPerPage = 20;
    const pages = state.totalResults ? _.range(1, Math.ceil(state.totalResults / itemsPerPage) + 1) : [];

    const changePage = (newUrl: string | null): void => {
        if (newUrl) {
            dispatch({
                type: ReducerActions.ChangePage,
                payload: { currentPage: newUrl }
            })
        }
        return
    };

    const getPagesToShow = () => {
        const activePage = pages.findIndex((page, i) => {
            const url = `https://pokeapi.co/api/v2/pokemon/?offset=${i * itemsPerPage}&limit=${itemsPerPage}`;
            return url === state.currentPage;
        })

        return _.range(activePage - 10, activePage + 10);
    }

    const pagesDisplayed = getPagesToShow();

    return (
        <div>
            <button onClick={() => changePage(state.previous)} >Prev</button>
            {pages && pages.map((page, i) => {
                const pageUrl = `https://pokeapi.co/api/v2/pokemon/?offset=${i * itemsPerPage}&limit=${itemsPerPage}`;
                return pagesDisplayed.includes(i) && (
                    <button className={state.currentPage === pageUrl ? 'btn-active' : ''} onClick={() => changePage(pageUrl)}>
                        {page}
                    </button>
                )
            })}
            <button onClick={() => changePage(state.next)} >Next</button>
        </div>
    )
}

export default Paginator
