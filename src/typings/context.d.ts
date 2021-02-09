/**
 *
 * ItemPageContext definitions
 *
 */

export interface PageItem {
    name: string;
    url: string;
}

export interface ItemPageContextState {
    itemList: PageItem[];
    currentPage: string;
    previous: string | null;
    next: string | null;
    totalResults: number | null;
}

/**
 *******************************************************************************
 */