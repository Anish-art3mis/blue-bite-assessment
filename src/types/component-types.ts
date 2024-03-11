export interface WeatherComponent {
    id: number;
    type: "weather";
    options: { lon: string; lat: string };
}

export interface ImageComponent {
    id: number;
    type: "image";
    options: { src: string; alt: string };
}

export interface ButtonComponent {
    id: number;
    type: "button";
    options: { text: string; variable: string; value: string; icon?: string };
}

export interface ConditionComponent {
    id: number;
    type: "condition";
    options: { variable: string; value: string };
    children: number | number[];
}

export type IComponent = WeatherComponent | ImageComponent | ButtonComponent | ConditionComponent;
