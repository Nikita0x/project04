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
    }
  }
});

export default store;
