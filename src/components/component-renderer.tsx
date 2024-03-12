import type { AppComponents } from "../types/component-types";
import Button from "./button";
import Condition from "./condition";
import Image from "./image";
import Weather from "./weather";

const getComponentByType = (componentType: AppComponents["type"]): React.FC<any> => {
    switch (componentType) {
        case "image":
            return Image;
        case "weather":
            return Weather;
        case "button":
            return Button;
        case "condition":
            return Condition;

        default:
            return () => <>Invalid component type {(componentType as any).type}</>;
    }
};
export default getComponentByType;
