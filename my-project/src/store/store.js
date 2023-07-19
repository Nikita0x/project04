import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
  state() {
    return {
      //here we define the name for the global store
      weatherCoordinates: null,
      weatherData: null,
    };
  },
  mutations: {
    //here we define mutations, methods with which the data will be stored in the global store
    setWeatherCoordinates(state, data) {
      state.weatherCoordinates = data;
    },
    setWeatherData(state, data) {
      state.weatherData = data;
    },
  },
  getters: {
    //here we define different getters, to retrieve needed information from the global data, to be able to access it and use it in our components.
    //We need to always check first if the data is present, because if it is not present - it will result in an error
    getCountry (state) {
      if(state.weatherCoordinates) {
        return state.weatherCoordinates.country
      }
      return null
    },
    getLat (state) {
      if(state.weatherCoordinates) {
        return state.weatherCoordinates.lat
      }
      return null
    },
    getLon (state) {
      if(state.weatherCoordinates) {
        return state.weatherCoordinates.lon
      }
      return null
    },
    getCity (state) {
      if(state.weatherCoordinates) {
        return state.weatherCoordinates.name
      }
      return null
    },
    getFeelsLike (state) {
      if(state.weatherData) {
        return state.weatherData.main.feels_like
      }
      return null
    },
    getHumidity (state) {
      if(state.weatherData) {
        return state.weatherData.main.humidity
      }
      return null
    },
    getPressure (state) {
      if(state.weatherData) {
        return state.weatherData.main.pressure
      }
      return null
    },
    getTemp (state) {
      if(state.weatherData) {
        return state.weatherData.main.temp
      }
      return null
    },
    getTempMax (state) {
      if(state.weatherData) {
        return state.weatherData.main.temp_max
      }
      return null
    },
    getTempMin (state) {
      if(state.weatherData) {
        return state.weatherData.main.temp_min
      }
      return null
    },
    getSunrise (state) {
      if(state.weatherData) {
        return state.weatherData.sys.sunrise
      }
      return null
    },
    getSunset (state) {
      if(state.weatherData) {
        return state.weatherData.sys.sunset
      }
      return null
    },
    getTimezone (state) {
      if(state.weatherData) {
        return state.weatherData.timezone
      }
      return null
    },
    getVisibility (state) {
      if(state.weatherData) {
        return state.weatherData.visibility
      }
      return null
    },
    getDescription (state) {
      if(state.weatherData) {
        return state.weatherData.weather[0].description
      }
      return null
    },
    getIcon (state) {
      if(state.weatherData) {
        return state.weatherData.weather[0].icon
      }
      return null
    },
    getMain (state) {
      if(state.weatherData) {
        return state.weatherData.weather[0].main
      }
      return null
    },
    getWindDegree (state) {
      if(state.weatherData) {
        return state.weatherData.wind.deg
      }
      return null
    },
    getWindSpeed (state) {
      if(state.weatherData) {
        return state.weatherData.wind.speed
      }
      return null
    },
  }
});

export default store;
