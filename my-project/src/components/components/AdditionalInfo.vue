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
