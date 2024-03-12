import React, { useMemo, useState } from "react";
import type { PageData, PageVariable } from "../types/models";
import { PageContextProvider, PageContextValue } from "../context/page-context";
import getComponentByType from "./component-renderer";

export interface ListRendererProps {
    pageData: PageData;
}

const ListRenderer: React.FC<ListRendererProps> = ({ pageData }) => {
    const [variables, setVariables] = useState<Record<string, PageVariable["initialValue"]>>(() => {
        // Create state object from variables description
        return (
            pageData.variables?.reduce((acc, cur) => {
                acc[cur.name] = cur.initialValue;
                return acc;
            }, {} as Record<string, PageVariable["initialValue"]>) ?? {}
        );
    });

    const [renderedListId, setRenderedListId] = useState<PageContextValue["renderedListId"]>(
        pageData.lists[0].id
    );

    const ctxValue = useMemo(
        () => ({
            variables,
            setVariables,
            components: pageData.components,
            lists: pageData.lists,
            renderedListId,
            setRenderedListId,
        }),
        [variables, pageData.components, pageData.lists, renderedListId, setRenderedListId]
    );

    const currentList = useMemo(
        () => pageData.lists.find((list) => list.id === renderedListId),
        [pageData, renderedListId]
    );

    if (!currentList) return <p>Invalid page is {renderedListId}</p>;

    return (
        <PageContextProvider value={ctxValue}>
            <InnerListRenderer
                key={currentList.id}
                list={currentList}
                components={pageData.components}
            />
        </PageContextProvider>
    );
};

export default ListRenderer;

export function InnerListRenderer({
    list,
    components,
}: {
    list: PageData["lists"][number];
    components: PageData["components"];
}) {
    return (
        <>
            {list.components.map((comp) => {
                let compOptions = components.find((c) => c.id === comp)!;
                let Compnent = getComponentByType(compOptions.type);
                return <Compnent {...compOptions} key={compOptions.id} />;
            })}
        </>
    );
}
