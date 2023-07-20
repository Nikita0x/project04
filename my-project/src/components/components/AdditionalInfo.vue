<template>
  <!-- collapsable -->
  <div class="collapse bg-base-200">
    <input type="checkbox" />
    <div class="text-xl font-medium collapse-title">More details</div>
    <div class="collapse-content flex flex-col space-y-3">
      <p v-if="store.state.weatherData" class="text-2xl">
        Minimum: <span class="text-[#D1D5DB] ml-1">{{ temp_min }} °C</span>
      </p>
      <p v-if="store.state.weatherData" class="text-2xl">
        Maximum: <span class="text-[#D1D5DB] ml-1">{{ temp_max }} °C</span>
      </p>
      <p v-if="store.state.weatherData" class="text-2xl">
        Feels like: <span class="text-[#D1D5DB] ml-1">{{ feels_like }} °C</span>
      </p>
      <p v-if="store.state.weatherData" class="text-2xl">
        Latitude: <span class="text-[#D1D5DB] ml-1">{{ lat }} °</span>
      </p>
      <p v-if="store.state.weatherData" class="text-2xl">
        Longitude: <span class="text-[#D1D5DB] ml-1">{{ lon }} °</span>
      </p>
      <p v-if="store.state.weatherData" class="text-2xl">
        Humidity: <span class="text-[#D1D5DB] ml-1">{{ humidity }} %</span>
      </p>
      <!-- if no data -->
      <p v-else>No data</p>
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
