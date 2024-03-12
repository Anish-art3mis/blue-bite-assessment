const VALUES = require("../values");

module.exports = {
    variables: [
        {
            name: "show_image",
            type: "string",
            initialValue: "hide",
        },
        {
            name: "location",
            type: "string",
            initialValue: "ny",
        },
    ],
    lists: [
        {
            // new york no img
            id: 0,
            components: [
                1,
                18, //new york weather,
                10, // button ca
                11, // button ch
                4, // condition list id 1 - with img
                14, // condition ca no img (list id 2)
                16, // condition ch no img (list id 3)
            ],
        },
        {
            // new york with img
            id: 1,
            components: [
                2,
                21, // image
                18, //new york weather,
                10, // button ca
                11, // button ch
                3, // condition list id 0 (new york no img)
                14, // condition ca no img (list id 2)
                16, // condition ch no img (list id 3)
            ],
        },
        {
            // ca no img
            id: 2,
            components: [
                19, // weather - ca
                9, // button ny
                11, // button ch
                12, // condition new york
                16, // condition chicogo
            ],
        },
        {
            // ch no with img
            id: 3,
            components: [
                20, // weather - ca
                9, // button ny
                10, // button ca
                12, // condition new york
                14, // condition ca no img (list id 2)
            ],
        },
    ],
    components: [
        {
            id: 1,
            type: "button",
            options: {
                text: "Show",
                variable: "show_image",
                value: "show",
            },
        },
        {
            id: 2,
            type: "button",
            options: {
                text: "Hide",
                variable: "show_image",
                value: "hide",
            },
        },
        //---------------

        // --------- show hide condition
        {
            id: 3,
            type: "condition",
            options: {
                variable: "show_image",
                value: "hide",
            },
            children: 0,
        },
        {
            id: 4,
            type: "condition",
            options: {
                variable: "show_image",
                value: "show",
            },
            children: 1,
        },
        // ---------------
        {
            id: 5,
            type: "condition",
            options: {
                variable: "show_image",
                value: "hide",
            },
            children: 3,
        },
        {
            id: 6,
            type: "condition",
            options: {
                variable: "show_image",
                value: "show",
            },
            children: 2,
        },
        // -----------------

        {
            id: 7,
            type: "condition",
            options: {
                variable: "show_image",
                value: "hide",
            },
            children: 5,
        },
        {
            id: 8,
            type: "condition",
            options: {
                variable: "show_image",
                value: "show",
            },
            children: 4,
        },
        // -----------------

        // Weather buttons
        {
            id: 9,
            type: "button",
            options: {
                text: "New York",
                variable: "location",
                value: "ny",
            },
        },
        {
            id: 10,
            type: "button",
            options: {
                text: "San Francisco",
                variable: "location",
                value: "ca",
            },
        },
        {
            id: 11,
            type: "button",
            options: {
                text: "Chicago",
                variable: "location",
                value: "ch",
            },
        },

        // ----------- Weather page condition
        // -- new york
        {
            id: 12,
            type: "condition",
            options: {
                variable: "location",
                value: "ny",
            },
            children: 0,
        },
        {
            id: 13,
            type: "condition",
            options: {
                variable: "location",
                value: "ny",
            },
            children: 1,
        },
        // -- ca
        {
            id: 14,
            type: "condition",
            options: {
                variable: "location",
                value: "ca",
            },
            children: 2,
        },
        {
            id: 15,
            type: "condition",
            options: {
                variable: "location",
                value: "ca",
            },
            children: 3,
        },
        // - chicago
        {
            id: 16,
            type: "condition",
            options: {
                variable: "location",
                value: "ch",
            },
            children: 3,
        },
        // -- weather
        {
            id: 18,
            type: "weather",
            options: {
                lon: VALUES.WEATHER_LOCATIONS[0].lon,
                lat: VALUES.WEATHER_LOCATIONS[0].lat,
            },
        },
        {
            id: 19,
            type: "weather",
            options: {
                lon: VALUES.WEATHER_LOCATIONS[1].lon,
                lat: VALUES.WEATHER_LOCATIONS[1].lat,
            },
        },
        {
            id: 20,
            type: "weather",
            options: {
                lon: VALUES.WEATHER_LOCATIONS[2].lon,
                lat: VALUES.WEATHER_LOCATIONS[2].lat,
            },
        },

        // --- images
        {
            id: 21,
            type: "image",
            options: VALUES.IMAGES[0],
        },
        {
            id: 22,
            type: "image",
            options: VALUES.IMAGES[1],
        },
        {
            id: 23,
            type: "image",
            options: VALUES.IMAGES[2],
        },
    ],
};
