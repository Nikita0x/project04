<template>
  <div
    class="w-96 h-[200px] bg-[#1D232A] shadow-xl border border-black flex flex-col sm:flex-row sm:rounded-xl"
  >
    <div
      class="flex flex-col w-full text-gray-300 justify-evenly sm:rounded-l-xl"
    >
      <p v-if="store.state.weatherData" class="pt-5 text-3xl">{{ city }}</p>
      <p v-if="store.state.weatherData" class="text-2xl">{{ main }}</p>
      <p v-if="store.state.weatherData" class="text-3xl">{{ temp }} <span v-if="temp">°C</span></p>
    </div>
    <div
      class="flex flex-col w-full text-gray-300 text- justify-evenly sm:rounded-r-xl"
    >
      <p v-if="store.state.weatherData" class="pt-5 text-3xl">{{ formattedDay }}</p>
      <div v-if="store.state.weatherData" class="w-8 h-8 ">
      <img
        :src="`http://openweathermap.org/img/w/${icon}.png`"
      />
    </div>
      <p v-if="store.state.weatherData" class="text-3xl">{{ formatted }}</p>
    </div>
  </div>
</template>




<script setup>
import { useNow, useDateFormat } from "@vueuse/core";
import { computed } from "vue"
import { useStore } from "vuex";


const store = useStore();

const city = computed(() => {
  return store.getters.getCity
})
const country = computed(() => {
  return store.getters.getCountry
})
const temp = computed(() => {
  let t = store.getters.getTemp;
  if(t) {
    const roundedTemperature = Math.floor(t)
    return roundedTemperature;
  }
});
const main = computed(() => {
  return store.getters.getMain;
});
const icon = computed(() => {
  return store.getters.getIcon;
});

</script>