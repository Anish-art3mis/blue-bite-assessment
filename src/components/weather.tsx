import React, { useEffect, useState } from "react";
import { WeatherData } from "../types/type";
import styles from "./weather.module.css";
import cloudy from "../icons/cloudy.svg";
import rain from "../icons/cloudy.svg";
import clearDay from "../icons/clear-day.svg";
import { WeatherComponent } from "../types/component-types";

export interface WeatherProps extends WeatherComponent {}

function getIconFromCondition(condition: string) {
    let obj: Record<string, string> = {
        rain: rain,
        cloudy: cloudy,
        "clear-day": clearDay,
    };
    return obj[condition];
}

const Weather: React.FC<WeatherProps> = ({ options: { lat, lon } }) => {
    const [weather, setWeather] = useState<WeatherData>();
    useEffect(() => {
        const fetchWeatherData = async () => {
            const response = await fetch(
                `http://localhost:3030/integration/weather?lat=${lat}&lon=${lon}`
            );
            if (!response.ok) {
                console.error("failed to fetch weather", response);
                return;
            }
            setWeather((await response.json()).data as WeatherData);
        };

        fetchWeatherData();
    }, [lat, lon]);

    if (!weather) return <>Loading...</>;
    return (
        <div className={styles["weather-container"]}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", height: "4rem" }}>
                    <img
                        src={getIconFromCondition(weather.condition)}
                        alt={weather.conditionName}
                    />
                    <div>
                        <p
                            style={{
                                fontSize: "2rem",
                            }}
                        >
                            {weather.temperature}&deg; {weather.unit}
                        </p>
                        <small>{weather.conditionName}</small>
                    </div>
                </div>
                <p>{weather.location}</p>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    flexWrap: "wrap",
                }}
            >
                {weather.upcomming.map((upc) => {
                    return (
                        <div
                            key={upc.day}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src={getIconFromCondition(upc.condition)}
                                style={{ width: "3rem" }}
                                alt={upc.conditionName}
                            />
                            <small>{upc.day}</small>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Weather;
