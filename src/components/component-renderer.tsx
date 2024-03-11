import { IComponent } from "../types/component-types";
import Button from "./button";
import Condition from "./condition";
import Image from "./image";
import Weather from "./weather";

const getComponent = (comObj: IComponent): React.FC<any> => {
    switch (comObj.type) {
        case "image":
            return Image;
        case "weather":
            return Weather;
        case "button":
            return Button;
        case "condition":
            return Condition;

        default:
            return () => <>Invalid component type {(comObj as any).type}</>;
    }
};
export default getComponent;
