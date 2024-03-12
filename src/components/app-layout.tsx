import { PropsWithChildren } from "react";
import styles from "./app-layout.module.css";

const AppLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    return <div className={styles["app-layout"]}>{children}</div>;
};

export const withAppLayout = <C extends React.FC<any>>(Comp: C) => {
    return (props: React.ComponentProps<C>) => (
        <AppLayout>
            <Comp {...props} />
        </AppLayout>
    );
};

export default AppLayout;
