
<template>
    <div class="bg-slate-500 text-white h-[400px] w-[400px]">
      <input
        v-model="cityName"
        @keyup.enter="fetchWeather"
        type="text"
        placeholder="Enter city name...."
      />
      <h1>hi</h1>
      <p>Output: {{ cityName }}</p>
      <p>Output on enter: {{ inputOnEnter }}</p>
      <button  class="bg-green-600 border">Test button to test global store:</button>
      <p>{{ store }}</p>
    </div>
  </template>
  
  
  <script setup>
  import { ref, computed } from "vue";
  import { useStore } from "vuex" // Import the useStore function
  const store = useStore(); // Access the store using the useStore function

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API
  
  const cityName = ref("");
  const limit = 5;
  
  const inputOnEnter = ref("");
  
  // lowercase the value from enter
  const lowercasedValue = computed(() => {
    return cityName.value.toLowerCase();
  });
  

//async weather data retrieval on enter 
async function fetchWeather() {
    inputOnEnter.value = lowercasedValue.value;
    
    try {
      const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName.value}&limit=${limit}&appid=${API_KEY}`
    )
    const data = await response.json();
    store.commit("setWeatherData", data)
    } catch (error) {
      console.error(error)
    }
    //clear the input in the end
    cityName.value = "";
  }
  </script>