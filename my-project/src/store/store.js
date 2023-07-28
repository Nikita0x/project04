import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
  state() {
    return {
      //here we define the name for the global store
      weatherCoordinates: null,
      weatherData: null,
      timezonedb: null,
      opencagedata: null,
      pixabaydata: null,
      restCountries: null,
      inputOnEnter: null,
      imagesContainerSize: null,
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
    setTimezoneDB(state, data) {
      state.timezonedb = data;
    },
    setOpencagedata(state, data) {
      state.opencagedata = data;
    },
    setPixabaydata(state, data) {
      state.pixabaydata = data;
    },
    setRestCountriesData(state, data) {
      state.restCountries = data;
    },
    setInputOnEnter(state, data) {
      state.inputOnEnter = data;
    },
    setImagesContainerSize(state, data) {
      state.imagesContainerSize = data;
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
    getTimezone (state) {
      if(state.weatherData) {
        return state.weatherData.timezone
      }
      return null
    },
    getDatetime (state) {
      if(state.weatherData) {
        return state.weatherData.dt
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
    // Timezone DB api
    getLocalTime (state) {
      if(state.timezonedb) {
        return state.timezonedb.formatted
      }
      return null
    },
    // OPENCAGE data api
    getCurrencyName(state) {
      if(state.opencagedata) {
        return state.opencagedata.results[0].annotations.currency.name
      }
      return null
    },
    getCurrencySymbol(state) {
      if(state.opencagedata) {
        return state.opencagedata.results[0].annotations.currency.symbol
      }
      return null
    },
    getTimezoneoffset (state) {
      if(state.opencagedata) {
        return state.opencagedata.results[0].annotations.timezone.offset_sec;
      }
      return null
    },
    getContinent (state) {
      if(state.opencagedata) {
        return state.opencagedata.results[0].components.continent;
      }
      return null
    },
    getCountryCode (state) {
      if(state.opencagedata) {
        return state.opencagedata.results[0].components["ISO_3166-1_alpha-2"];
      }
      return null
    },
    // Pixabay api
    getHits (state) {
      if(state.pixabaydata) {
        return state.pixabaydata.hits
      }
      return null
    },
    // Rest Countries API
    getCapital (state) {
      if(state.restCountries) {
        return state.restCountries.capital[0]
      }
      return null
    },
    getCoatOfArms(state) {
      if(state.restCountries) {
        return state.restCountries.coatOfArms.svg
      }
      return null
    },
    getIndependent(state) {
      if(state.restCountries) {
        return state.restCountries.independent
      }
      return null
    },
    getLanguages(state) {
      if(state.restCountries) {
        return state.restCountries.languages
      }
      return null
    },
    getPopulation(state) {
      if(state.restCountries) {
        return state.restCountries.population
      }
      return null
    },
    getUnMember(state) {
      if(state.restCountries) {
        return state.restCountries.unMember
      }
      return null
    },
    // input on enter
    getInputOnEnter(state) {
      if(state.inputOnEnter) {
        return state.input
      }
      return null
    },
    // images contaienr size
    getImagesContainerSize(state) {
      if(state.imagesContainerSize) {
        return state.imagesContainerSize
      }
      return null
    },
  },
  actions: {
  }
});

export default store;
