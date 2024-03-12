import { useEffect, useReducer } from "react";
import type { PageData } from "../types/models";
import { API_ENDPOINTS } from "../constants/api-endpoints";

interface State {
    data: null | PageData;
    isLoading: boolean;
    error: null | Error;
}

export function usePageData(pageId: string) {
    const [state, setState] = useReducer(
        (state: State, action: Partial<State>) => ({ ...state, ...action }),
        {
            data: null,
            isLoading: true,
            error: null,
        }
    );

    useEffect(() => {
        const fetchPageData = async () => {
            try {
                const response = await fetch(`${API_ENDPOINTS.page}/${pageId}`);
                if (!response.ok) {
                    const text = await response.text();
                    throw new Error(text);
                }
                const pData = await response.json();
                setState({ data: pData.data as PageData, error: null });
            } catch (err) {
                setState({ error: err as Error });
            } finally {
                setState({ isLoading: false });
            }
        };

        fetchPageData();
    }, [pageId]);

    return state;
}
