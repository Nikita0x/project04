<template>
  <div class="bg-slate-500 text-white w-[400px]">
    <nav class="flex justify-center">
      <input
        type="text"
        placeholder="Search..."
        class="w-full max-w-xs input input-bordered"
        v-model="cityName"
        @keyup.enter="fetchWeatherCoordinates"
      />
    </nav>  

    <h1>hi</h1>
    <p>Output: {{ cityName }}</p>
    <p>Output on enter: {{ inputOnEnter }}</p>
    <button @click="console.log(weatherData)" class="bg-green-600 border">
      Test button to test global store:
    </button>
    <p v-if="country">Country: {{ country }}</p>
    <p v-if="lat">lat: {{ lat }}</p>
    <p v-if="lon">lon: {{ lon }}</p>
    <p v-if="city">city: {{ city }}</p>
    <p v-if="feels_like">feels_like: {{ feels_like }}</p>
    <p v-if="humidity">humidity: {{ humidity }}</p>
    <p v-if="pressure">pressure: {{ pressure }}</p>
    <p v-if="temp">temp: {{ temp }}</p>
    <p v-if="temp_max">temp_max: {{ temp_max }}</p>
    <p v-if="temp_min">temp_min: {{ temp_min }}</p>
    <p v-if="sunset">sunset: {{ sunset }}</p>
    <p v-if="sunrise">sunrise: {{ sunrise }}</p>
    <p v-if="timezone">timezone: {{ timezone }}</p>
    <p v-if="visibility">visibility: {{ visibility }}</p>
    <p v-if="description">description: {{ description }}</p>
    <p v-if="main">main: {{ main }}</p>
    <img
      class="w-[120px] h-[120px]"
      v-if="icon"
      :src="`http://openweathermap.org/img/w/${icon}.png`"
    />
    <p v-if="wind_degree">wind_degree: {{ wind_degree }}</p>
    <p v-if="wind_speed">wind_speed: {{ wind_speed }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex'; // Import the useStore function
const store = useStore(); // Access the store using the useStore function

const API_KEY = import.meta.env.VITE_OPENWEATHER_API;

const cityName = ref('');
const limit = 5;

const inputOnEnter = ref('');

// lowercase the value from enter
const lowercasedValue = computed(() => {
  return cityName.value.toLowerCase();
});

// parsing weatherData from global store
const weatherCoordinates = computed(() => {
  return store.state.weatherCoordinates;
});
const weatherData = computed(() => {
  return store.state.weatherData;
});
const country = computed(() => {
  return store.getters.getCountry;
});
const lat = computed(() => {
  return store.getters.getLat;
});
const lon = computed(() => {
  return store.getters.getLon;
});
const city = computed(() => {
  return store.getters.getCity;
});
const feels_like = computed(() => {
  return store.getters.getFeelsLike;
});
const humidity = computed(() => {
  return store.getters.getHumidity;
});
const pressure = computed(() => {
  return store.getters.getPressure;
});
const temp = computed(() => {
  return store.getters.getTemp;
});
const temp_max = computed(() => {
  return store.getters.getTempMax;
});
const temp_min = computed(() => {
  return store.getters.getTempMin;
});
const sunrise = computed(() => {
  return store.getters.getSunrise;
});
const sunset = computed(() => {
  return store.getters.getSunset;
});
const timezone = computed(() => {
  return store.getters.getTimezone;
});
const visibility = computed(() => {
  return store.getters.getVisibility;
});
const description = computed(() => {
  return store.getters.getDescription;
});
const icon = computed(() => {
  return store.getters.getIcon;
});
const main = computed(() => {
  return store.getters.getMain;
});
const wind_speed = computed(() => {
  return store.getters.getWindSpeed;
});
const wind_degree = computed(() => {
  return store.getters.getWindDegree;
});

//async weather data retrieval on enter
async function fetchWeatherCoordinates() {
  inputOnEnter.value = lowercasedValue.value;

  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName.value}&limit=${limit}&appid=${API_KEY}`
    );
    const data = await response.json();
    store.commit('setWeatherCoordinates', data[0]);
  } catch (error) {
    console.error(error);
  }
  //clear the input in the end
  cityName.value = '';

  // after the initial data has been retrieved, do another async fetch request with the usage of the initial data's lat and lon coordinates
  async function fetchWeather() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat.value}&lon=${lon.value}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      store.commit('setWeatherData', data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  await fetchWeather();
}
</script>
