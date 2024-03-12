import { useEffect } from "react";
import { usePageContext } from "../context/page-context";
import { ConditionComponent } from "../types/component-types";

export interface ConditionProps extends ConditionComponent {}

const Condition: React.FC<ConditionProps> = ({ children, options }) => {
    const { value, variable } = options;
    const listCtx = usePageContext();

    useEffect(() => {
        if (listCtx.variables[variable] === value) {
            listCtx.setRenderedListId(children);
        }
    }, [children, listCtx, value, variable]);

    return null;
};

export default Condition;
