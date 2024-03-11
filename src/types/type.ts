import { IComponent } from "./component-types";

export interface PageVariable {
    name: string;
    type: string;
    initialValue: string;
}

export interface PageData {
    lists: Array<{
        id: number;
        components: Array<IComponent["id"]>;
    }>;
    components: Array<IComponent>;
    variables?: Array<PageVariable>;
}

export interface WeatherData {
    lon: string;
    lat: string;
    condition: string;
    conditionName: string;
    temperature: number;
    unit: string;
    location: string;
    upcomming: Array<{
        day: string;
        condition: string;
        conditionName: string;
    }>;
}
