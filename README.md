# Trippy

**Your trusty partner in trip-planning is here!** 

Here are some of the key features of Trippy:

1. **Simple to use**: Know your destination and date? Great, that's all you need for Trippy!
1. **Destination picture**: Trippy jazzez up your trip details with an awesome random picture from Pixabay.com. You don't need to do anything, Trippy does it for you!
1. **Weather**: If the trip is more than 16 days away, you'll know what the average temperature is for that time of year.
1. **Flight details**: Get more structured by adding the flight details to your trips. Made a mistake and want to correct it? No worries, the fields are always editable and saved with a single click or tap.
1. **Restaurants**: What's a trip without a little local cousine experimentation? Add your must-see restaurants and their addresses on the list and Trippy will hang on to those for you to refer to when travelling.
1. **Hotels**: Booked a hotel and wanna remember how to get to it? Didn't book one and keeping your options open? Add your hotels and their addresses to the list and Trippy will have your back.

# Project details

This is my graduation project for Udacity's [Front End Web Developer](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) Nanodegree Program.

## Requirements

The project requirements:
Build out a travel app that, obtains a desired trip location & date from the user and displays weather and an image of the location using information obtained from external APIs.

Tech stack (with HTML/CSS/JS ES6):
- Webpack
- Sass
- Node.js
- Express.js
- Jest

APIs:
- [Geonames](https://www.geonames.org/export/)
- [Pixabay](https://pixabay.com/api/docs/)
- [Weatherbit](https://www.weatherbit.io/)
- [Meteostat](https://dev.meteostat.net/)

## Setup

To set up:

1.   Clone or fork the repository on your machine.
2.   In the root directory of the project (with your favorite Terminal / Command line tool) run:

    `npm i`

3.   Create a file called `.env` in the root directory. Add the following to the file, then save:

    ```
    PORT=8081
    KEY_WEATHER=<**your-weatherbit-api-key**>
    KEY_PIXABAY=<**your-pixabay-api-key**>
    KEY_METEOSTAT=<**your-meteostat-api-key**>
    KEY_GEONAMES=<**your-geonames-username**>
    ```

3.   Create a file called `.babelrc` in the root directory. Add the following to the file, then save:

    ```
    {
        "presets": ["@babel/preset-env"],
        "plugins": [ 
            ["@babel/transform-runtime"] 
        ]
    }
    ```

4.   From the Terminal, run one of the following commands, depending on what you want to do:

     *   `npm start` - launch the server. This is **mandatory** for the project to work;
     *   `npm run build-dev` - Webpack builds and deploys a development environment on port 8080. It automatically opens a browser page for you to view at `http://localhost:8080`;
     *   `npm run test` - Runs all JEST tests available;
     *   `npm run build-prod` - Webpack builds the production-ready version of the site. To view, point your browser to the server's endpoint, `http://localhost:8081`.