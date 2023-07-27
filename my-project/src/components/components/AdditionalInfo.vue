<template>
  <div class="relative flex items-center justify-center">

  <div v-if="store.state.weatherData" class="relative w-full overflow-hidden collapsible">
      <input class="absolute inset-x-0 top-0 z-10 h-12 opacity-0 cursor-pointer peer" type="checkbox">
      <div class="flex items-center h-12 p-7 bg-[#1D232A] shadow-xl text-gray-300 border border-gray-500 text-2xl">More details</div>
      <!-- content -->
      <div class=" overflow-hidden transition-all duration-500 bg-[#1D232A] text-gray-300 peer-checked:max-h-[24rem] peer-checked:p-5 peer-checked:opacity-1 max-h-0">
        <p class="text-2xl">
        Sunrise: <span class="ml-1"> time</span>
      </p>
      <p class="text-2xl">
        Sunset: <span class="ml-1">time</span>
      </p>
      <p v-if="store.state.weatherData" class="text-2xl">
        Minimum: <span class="ml-1">{{ temp_min }} °C</span>
      </p>
      <p v-if="store.state.weatherData" class="text-2xl">
        Maximum: <span class="ml-1">{{ temp_max }} °C</span>
      </p>
      <p v-if="store.state.weatherData" class="text-2xl">
        Feels like: <span class="ml-1">{{ feels_like }} °C</span>
      </p>
      <p v-if="store.state.weatherData" class="text-2xl">
        Latitude: <span class="ml-1">{{ lat }} °</span>
      </p>
      <p v-if="store.state.weatherData" class="text-2xl">
        Longitude: <span class="ml-1">{{ lon }} °</span>
      </p>
      <p v-if="store.state.weatherData" class="text-2xl">
        Humidity: <span class="ml-1">{{ humidity }} %</span>
      </p>
      </div>
    </div>
  </div>

  <div id="accordion-collapse" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-1">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>What is Flowbite?</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
    <div class="p-5 text-gray-400 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p class="text-2xl">
        Minimum: <span class="ml-1">{{ temp_min }} °C</span>
      </p>
      <p class="text-2xl">
        Maximum: <span class="ml-1">{{ temp_max }} °C</span>
      </p>
      <p class="text-2xl">
        Feels like: <span class="ml-1">{{ feels_like }} °C</span>
      </p>
      <p class="text-2xl">
        Latitude: <span class="ml-1">{{ lat }} °</span>
      </p>
      <p class="text-2xl">
        Longitude: <span class="ml-1">{{ lon }} °</span>
      </p>
      <p class="text-2xl">
        Humidity: <span class="ml-1">{{ humidity }} %</span>
      </p>
      
    </div>
  </div>
</div>

</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const country = computed(() => {
  return store.getters.getCountry;
});
const temp_max = computed(() => {
  let t = store.getters.getTempMax;
  if (t) {
    const roundedTemperature = Math.floor(t);
    return roundedTemperature;
  }
});
const temp_min = computed(() => {
  let t = store.getters.getTempMin;
  if (t) {
    const roundedTemperature = Math.floor(t);
    return roundedTemperature;
  }
});
const feels_like = computed(() => {
  let t = store.getters.getFeelsLike;
  if (t) {
    const roundedTemperature = Math.floor(t);
    return roundedTemperature;
  }
});
const lat = computed(() => {
  return store.getters.getLat;
});
const lon = computed(() => {
  return store.getters.getLon;
});
const humidity = computed(() => {
  return store.getters.getHumidity;
});

const icon = computed(() => {
  return store.getters.getIcon;
});
const main = computed(() => {
  return store.getters.getMain;
});
const datetime = computed(() => {
  return store.getters.getDatetime;
});
</script>
