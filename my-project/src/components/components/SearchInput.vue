<template>
    <nav class="flex justify-center">
      <div class="relative w-full px-10">
        <input
        type="text"
        placeholder="Search"
        class="w-full input input-bordered"
        v-model="cityName"
        @keyup.enter="fetchWeatherCoordinates"
        />
       <button @click="fetchWeatherCoordinates" class="lg:hidden absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 right-[1rem] btn btn-sm" >Search</button>
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
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  await fetchWeather();

  //calling timezonedb api
  async function fetchTimezonedb() {
    try {
      const response = await fetch(
        `https://api.timezonedb.com/v2.1/get-time-zone?key=${TIMEZONEDB_KEY}&format=json&by=position&lat=${lat.value}&lng=${lon.value}`
      );
      const data = await response.json();
      store.commit('setTimezoneDB', data);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  await fetchTimezonedb();
  //calling geocagedata api
  async function fetchOpencagedata() {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat.value}+${lon.value}&key=${OPENCAGEDATA_KEY}&pretty=1`
      );
      const data = await response.json();
      store.commit('setOpencagedata', data);
      console.log(data.results[0]);
    } catch (error) {
      console.error(error);
    }
  }
  await fetchOpencagedata();

  //calling pixabay api
  async function fetchPixabay() {
    const encodedSearchTerm = encodeURIComponent(inputOnEnter.value);
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${PIXABAY_API}&q=${encodedSearchTerm}&image_type=photo`
    );
    console.log('encoded search term =' + encodedSearchTerm)
    const data = await response.json();
    store.commit('setPixabaydata', data);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
  }
  await fetchPixabay();
  
    //calling restcountries api
    async function fetchRestCountries() {
    try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode.value}`
    );
    const data = await response.json();
    store.commit('setRestCountriesData', data[0]);
    console.log(data[0]);
  } catch (error) {
    console.error(error);
  }
  }
  await fetchRestCountries();
}

</script>
