<template>
  <!-- collapsable -->
  <div class="collapse bg-base-200">
    <input type="checkbox" />
    <div class="text-xl font-medium collapse-title">More details</div>
    <div class="collapse-content">
      <p v-if="store.state.weatherData" class="text-2xl">
        Country - {{ country }}
      </p>
      <p v-if="store.state.weatherData" class="text-2xl">
        Minimum - {{ temp_min }} °C
      </p>
      <p v-if="store.state.weatherData" class="text-2xl">
        Maximum - {{ temp_max }} °C
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
