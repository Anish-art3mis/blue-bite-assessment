import { usePageContext } from "../context/list-context";
import { ConditionComponent } from "../types/component-types";
import { InnerListRenderer } from "./list-renderer";

export interface ConditionProps extends ConditionComponent {}

const Condition: React.FC<ConditionProps> = ({ children, options }) => {
    const { value, variable } = options;
    const listCtx = usePageContext();

    if (listCtx.variables[variable] === value) {
        let childs = Array.isArray(children) ? children : [children];

        return (
            <>
                {childs.map((childListId) => {
                    let list = listCtx.lists.find((cm) => cm.id === childListId);
                    return <InnerListRenderer list={list!} components={listCtx.components} />;
                })}
            </>
        );
    }

    return null;
};

export default Condition;
