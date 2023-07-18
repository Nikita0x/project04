import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
  state() {
    return {
      weatherData: null,
    };
  },
  mutations: {
    setWeatherData(state, data) {
      state.weatherData = data;
    },
  },
  getters: {
    getCountry (state) {
      return state.weatherData
    }
  }
});

export default store;
