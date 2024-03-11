import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { PageData } from "./types/type";

import ListRenderer from "./components/list-renderer";

const App = () => {
    const { id } = useParams<{ id: string }>();
    const [pageData, setPageData] = useState<PageData>();

    useEffect(() => {
        const fetchPageData = async () => {
            const response = await fetch(`http://localhost:3030/page/${id}`);
            if (!response.ok) {
                console.error("Failed to fetch", response);
                return;
            }
            const pData = await response.json();
            console.log("row data", pData);
            setPageData(pData.data as PageData);
        };

        fetchPageData();
    }, [id]);

    if (!pageData) return <>Loading...</>;

    return (
        <div
            style={{
                width: "500px",
                border: "1px solid black",
                padding: "2rem",
            }}
        >
            <div className="bg-red-500">
                <ListRenderer pageData={pageData} />
            </div>
        </div>
    );
};

export default App;
