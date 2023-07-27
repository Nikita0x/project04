<template>
    <nav class="p-5">
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative shadow-xl">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input v-model="cityName"
        @keyup.enter="fetchWeatherCoordinates" type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter city name...">
        <button @click="fetchWeatherCoordinates" class="text-white absolute right-2.5 bottom-2.5 bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-4 py-2 dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600">Search</button>
    </div>
    </nav>   
</template>

<script setup>
const API_KEY = import.meta.env.VITE_OPENWEATHER_API;
const TIMEZONEDB_KEY = import.meta.env.VITE_TIMEZONEDB_API;
const OPENCAGEDATA_KEY = import.meta.env.VITE_OPENCAGEDATA_API;
const PIXABAY_API = import.meta.env.VITE_PIXABAY_API;


import { ref, computed } from 'vue';
import { useStore } from 'vuex'; // Import the useStore function
const store = useStore(); // Access the store using the useStore function

const cityName = ref('tokyo');
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
const countryCode = computed(() => {
  return store.getters.getCountryCode;
});

//async weather data retrieval on enter
async function fetchWeatherCoordinates() {
  inputOnEnter.value = lowercasedValue.value;
  
  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${inputOnEnter.value}&limit=${limit}&appid=${API_KEY}`
    );
    const data = await response.json();
    store.commit('setWeatherCoordinates', data[0]);
    await fetchWeather();
  } catch (error) {
    console.error('could not retireve data from openweatherapi + ',error);
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
      // console.log(data);
      await fetchTimezonedb();
    } catch (error) {
      console.error(error);
    }
  }

  //calling timezonedb api
  async function fetchTimezonedb() {
    let page = 1;
    try {
      const response = await fetch(
        `https://api.timezonedb.com/v2.1/get-time-zone?key=${TIMEZONEDB_KEY}&format=json&by=position&lat=${lat.value}&lng=${lon.value}&page=${page++}`
      );
      const data = await response.json();
      store.commit('setTimezoneDB', data);
      // console.log(data);
      await fetchOpencagedata();
    } catch (error) {
      console.error(error);
    }
  }
  //calling geocagedata api
  async function fetchOpencagedata() {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat.value}+${lon.value}&key=${OPENCAGEDATA_KEY}&pretty=1`
      );
      const data = await response.json();
      store.commit('setOpencagedata', data);
      // console.log(data.results[0]);
      await fetchPixabay();
    } catch (error) {
      console.error(error);
    }
  }

  //calling pixabay api
  async function fetchPixabay() {
    const encodedSearchTerm = encodeURIComponent(inputOnEnter.value);
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${PIXABAY_API}&q=${encodedSearchTerm}&image_type=photo`
    );
    // console.log('encoded search term =' + encodedSearchTerm)
    const data = await response.json();
    store.commit('setPixabaydata', data);
    console.log(data);
    await fetchRestCountries();
  } catch (error) {
    console.error(error);
  }
  }
  
    //calling restcountries api
    async function fetchRestCountries() {
    try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode.value}`
    );
    const data = await response.json();
    store.commit('setRestCountriesData', data[0]);
    // console.log(data[0]);
  } catch (error) {
    console.error(error);
  }
  }
}

</script>
