import { createContext, useContext } from "react";
import { PageData, PageVariable } from "../types/type";

interface PageContextValue<V> {
    variables: V;
    setVariables: React.Dispatch<React.SetStateAction<V>>;
    components: PageData["components"];
    lists: PageData["lists"];
}
export const PageContext = createContext<PageContextValue<
    Record<string, PageVariable["initialValue"]>
> | null>(null);

export const usePageContext = () => {
    const ctx = useContext(PageContext);
    if (ctx === null) throw new Error(`"useListContext must be used within ListContext"`);
    return ctx;
};
