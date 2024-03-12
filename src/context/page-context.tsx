import { PropsWithChildren, createContext, useContext } from "react";
import type { PageData, PageVariable } from "../types/models";

export interface PageContextValue<
    V extends object = {},
    IListId = PageData["lists"][number]["id"]
> {
    renderedListId: IListId;
    setRenderedListId: React.Dispatch<React.SetStateAction<IListId>>;
    variables: V;
    setVariables: React.Dispatch<React.SetStateAction<V>>;
    components: PageData["components"];
    lists: PageData["lists"];
}

const PageContext = createContext<PageContextValue<
    Record<string, PageVariable["initialValue"]>
> | null>(null);

export const PageContextProvider: React.FC<PropsWithChildren<{ value: PageContextValue }>> = (
    props
) => {
    return <PageContext.Provider value={props.value}>{props.children}</PageContext.Provider>;
};

export const usePageContext = () => {
    const ctx = useContext(PageContext);
    if (ctx === null) throw new Error(`"useListContext must be used within ListContext"`);
    return ctx;
};
