import React from "react";
import { useParams } from "react-router";
import ListRenderer from "./components/list-renderer";
import { withAppLayout } from "./components/app-layout";
import CardShimer from "./components/card-shimer";
import { usePageData } from "./hooks/use-page-data";

const App = () => {
    const { id } = useParams<{ id: string }>();
    const { data: pageData, isLoading, error } = usePageData(id);

    if (isLoading)
        return (
            <>
                <CardShimer />
                <CardShimer />
                <CardShimer />
            </>
        );

    if (pageData) return <ListRenderer pageData={pageData} />;

    return <p>something went wrong "{error?.message ?? "Server error"}"</p>;
};

export default withAppLayout(App);
