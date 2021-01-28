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
    isLoading: boolean;
    itemList: PageItem[];
    previous: string | null;
    next: string | null;
    totalResult: number;
}

/**
 *******************************************************************************
 */