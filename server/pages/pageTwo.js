const VALUES = require("../values");

module.exports = {
    variables: [
        {
            name: "show_weather",
            type: "string",
            initialValue: "hide",
        },
    ],
    lists: [
        {
            id: 0,
            components: [1, 3, 4],
        },
        {
            id: 1,
            components: [2, 5, 4, 6],
        },
    ],
    components: [
        {
            id: 1,
            type: "button",
            options: {
                text: "Show",
                variable: "show_weather",
                value: "show",
            },
        },
        {
            id: 2,
            type: "button",
            options: {
                text: "Hide",
                variable: "show_weather",
                value: "hide",
            },
        },
        {
            id: 3,
            type: "condition",
            options: {
                variable: "show_weather",
                value: "show",
            },
            children: 1,
        },
        {
            id: 4,
            type: "weather",
            options: {
                lon: VALUES.WEATHER_LOCATIONS[1].lon,
                lat: VALUES.WEATHER_LOCATIONS[1].lat,
            },
        },
        {
            id: 5,
            type: "image",
            options: VALUES.IMAGES[0],
        },
        {
            id: 6,
            type: "condition",
            options: {
                variable: "show_weather",
                value: "hide",
            },
            children: 0,
        },
    ],
};
