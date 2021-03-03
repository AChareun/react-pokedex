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
    currentPage: number;
    previous: string | null;
    next: string | null;
    totalResults: number | null;
}

/**
 *******************************************************************************
 */