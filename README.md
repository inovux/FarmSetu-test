# Google Maps and Open weather map API test

With this weather app you can view the weather for your current location. It will show the current weather plus the weather for the coming 7 days.

## Installation

To get started with this application on your local machine, you have to install all it's dependencies first:

```bash
yarn install
```

You also need to make sure that you have 2 API keys setup inside a file called `.env.development`. You need the following contents in this file:

```text
REACT_APP_GOOGLE_MAPS_API_KEY=PASTE YOUR API KEY FOR GOOGLE MAPS HERE
REACT_APP_OPEN_WEATHER_MAP_API_KEY=PASTE YOUR API KEY FOR OPEN WEATHER MAP HERE
```

After both installing the dependencies and adding your api keys you are ready to start the application:

```bash
yarn start
```

You can access the web app on [http://localhost:3000/](http://localhost:3000/) after `yarn start` ran successfully without any errors.

## Development

Make sure you have `prettier` configured in your IDE to make working on this project a lot easier.

## Tests

To run the tests, simply run `yarn test`.

You can also test whether there are any mistakes in your code by running `yarn validate`.

## Demo

You can view the demo on the following link: https://priceless-yalow-7d6e4e.netlify.app/
