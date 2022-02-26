/* eslint-disable @typescript-eslint/no-unused-vars */

namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_GOOGLE_MAPS_API_KEY: string
    REACT_APP_OPEN_WEATHER_MAP_API_KEY: string
    NODE_ENV: 'development' | 'production' | 'test'
  }
}
