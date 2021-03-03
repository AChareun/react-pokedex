import React from 'react'
import {useItemPageContext} from "../../context/itemPageContext";
import {ReducerActions} from "../../typings/reducer.d";
import _ from 'lodash';

const Paginator:React.FC = (props) => {
    const { state, dispatch } = useItemPageContext();
    const itemsPerPage = 20;
    const pages = state.totalResults ? _.range(1, Math.ceil(state.totalResults / itemsPerPage) + 1) : [];

    const changePage = (page: number | null): void => {
        if (page && page > 0 && page <= pages.length) {
            dispatch({
                type: ReducerActions.ChangePage,
                payload: { currentPage: page }
            })
        }
        return
    };

    const getPagesToShow = () => {
        const activePage = pages.findIndex((page) => {
            return page === state.currentPage;
        })

        return _.range(activePage - 10, activePage + 10);
    }

    const pagesDisplayed = getPagesToShow();

    return (
        <div>
            <button onClick={() => changePage(state.currentPage - 1)} >Prev</button>
            {pages && pages.map((page) => {
                return pagesDisplayed.includes(page) && (
                    <button className={state.currentPage === page ? 'btn-active' : ''} onClick={() => changePage(page)}>
                        {page}
                    </button>
                )
            })}
            <button onClick={() => changePage(state.currentPage + 1)} >Next</button>
        </div>
    )
}

export default Paginator
