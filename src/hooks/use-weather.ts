import { useEffect, useReducer } from "react";
import type { WeatherData } from "../types/models";
import { API_ENDPOINTS } from "../constants/api-endpoints";

type State = {
    data: null | WeatherData;
    isLoading: boolean;
    error: null | Error;
};

export function useWeather({ lat, lon }: { lat: string; lon: string }) {
    const [state, setState] = useReducer(
        (state: State, action: Partial<State>) => ({ ...state, ...action }),
        {
            data: null,
            isLoading: true,
            error: null,
        }
    );

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(`${API_ENDPOINTS.weather}?lat=${lat}&lon=${lon}`);
                if (!response.ok) {
                    console.error("failed to fetch weather", response);
                    const text = await response.text();
                    throw new Error(text);
                }
                setState({ data: (await response.json()).data, error: null });
            } catch (error) {
                setState({ error: error as Error });
            } finally {
                setState({ isLoading: false });
            }
        };

        fetchWeatherData();
    }, [lat, lon]);

    return state;
}
