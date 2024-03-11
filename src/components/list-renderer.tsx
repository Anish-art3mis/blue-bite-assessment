import React, { useMemo, useState } from "react";
import type { PageData, PageVariable } from "../types/type";
import { PageContext } from "../context/list-context";
import getComponent from "./component-renderer";

export interface ListRendererProps {
    pageData: PageData;
}

const ListRenderer: React.FC<ListRendererProps> = ({ pageData }) => {
    const [variables, setVariables] = useState<Record<string, PageVariable["initialValue"]>>(() => {
        return (
            pageData.variables?.reduce((acc, cur) => {
                acc[cur.name] = cur.initialValue;
                return acc;
            }, {} as Record<string, any>) ?? {}
        );
    });

    const ctxValue = useMemo(
        () => ({ variables, setVariables, components: pageData.components, lists: pageData.lists }),
        [variables, pageData.components, pageData.lists]
    );
    return (
        <PageContext.Provider value={ctxValue}>
            <div style={{ display: "flex", flexDirection: "column", width: "100%", gap: "1rem" }}>
                {pageData.lists.map((list) => {
                    return (
                        <InnerListRenderer
                            key={list.id}
                            list={list}
                            components={pageData.components}
                        />
                    );
                })}
            </div>
        </PageContext.Provider>
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
                let C = getComponent(compOptions);
                return <C {...compOptions} key={compOptions.id} />;
            })}
        </>
    );
}
