<template>
    <nav class="flex justify-center">
      <input
        type="text"
        placeholder="Search..."
        class="w-full max-w-xs input input-bordered"
        v-model="cityName"
        @keyup.enter="fetchWeatherCoordinates"
      />
    </nav>
</template>

<script setup>
const API_KEY = import.meta.env.VITE_OPENWEATHER_API;
const APILAYER_KEY = import.meta.env.VITE_APILAYER_API;

import { ref, computed } from 'vue';
import { useStore } from 'vuex'; // Import the useStore function
const store = useStore(); // Access the store using the useStore function

const cityName = ref('');
const limit = 5;

const inputOnEnter = ref('');

// lowercase the value from enter
const lowercasedValue = computed(() => {
  let result = cityName.value.toLowerCase().trim()
  return result;
});
const lat = computed(() => {
  return store.getters.getLat;
});
const lon = computed(() => {
  return store.getters.getLon;
});

//async weather data retrieval on enter
async function fetchWeatherCoordinates() {
  inputOnEnter.value = lowercasedValue.value;
  
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${inputOnEnter.value}&limit=${limit}&appid=${API_KEY}`
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
