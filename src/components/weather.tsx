import React from "react";
import styles from "./weather.module.css";
import cloudy from "../icons/cloudy.svg";
import rain from "../icons/cloudy.svg";
import clearDay from "../icons/clear-day.svg";
import { WeatherComponent } from "../types/component-types";
import CardShimer from "./card-shimer";
import { useWeather } from "../hooks/use-weather";
import { WeatherData } from "../types/models";

function getIconFromCondition(condition: string) {
    let obj: Record<string, string> = {
        rain: rain,
        cloudy: cloudy,
        "clear-day": clearDay,
    };
    return obj[condition];
}

export interface WeatherProps extends WeatherComponent {}

const Weather: React.FC<WeatherProps> = ({ options: { lat, lon } }) => {
    const { data: weather, isLoading, error } = useWeather({ lat, lon });

    if (isLoading) return <CardShimer />;

    if (weather)
        return (
            <div className={styles["weather-container"]}>
                <div className={styles["current-weather-box"]}>
                    <div className={styles["current-weather-condition-box"]}>
                        <img
                            src={getIconFromCondition(weather.condition)}
                            alt={weather.conditionName}
                        />
                        <div>
                            <p className={styles["cw-temp"]}>
                                {weather.temperature}&deg; {weather.unit}
                            </p>
                            <small>{weather.conditionName}</small>
                        </div>
                    </div>
                    <p>{weather.location}</p>
                </div>

                <div className={styles["upcoming-weather-container"]}>
                    {weather.upcomming.map((weather) => {
                        return <UpcomingWeather key={weather.day} weather={weather} />;
                    })}
                </div>
            </div>
        );

    return (
        <div className={styles["weather-container"]}>
            Something went wrong "{error?.message || "Server error"}"
        </div>
    );
};

export default Weather;

const UpcomingWeather: React.FC<{ weather: WeatherData["upcomming"][number] }> = ({ weather }) => {
    return (
        <div key={weather.day} className={styles["upcoming-weather"]}>
            <img src={getIconFromCondition(weather.condition)} alt={weather.conditionName} />
            <label>{weather.day}</label>
        </div>
    );
};
