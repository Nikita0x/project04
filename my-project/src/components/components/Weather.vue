<template>
  <div
    class="w-full h-[200px] bg-[#1D232A] shadow-xl border border-black flex flex-col sm:flex-row sm:rounded-xl"
  >
  <!-- left column -->
    <div
      class="flex flex-col w-full text-gray-300 justify-evenly items-center sm:rounded-l-xl"
    >
      <p v-if="store.state.weatherData" class="pt-5 text-3xl">{{ city }}</p>
        <div v-if="store.state.weatherData" class="flex text-2xl">
        {{ main }}
        <div class="flex justify-center items-center lg:tooltip w-10 h-10" :data-tip="description">
          <img
            class="ml-2"
            :src="`http://openweathermap.org/img/w/${icon}.png`"
          />
        </div>
      </div>
      <p v-if="store.state.weatherData" class="text-3xl">{{ temp }} <span v-if="temp">°C</span></p>
    </div>
    <!-- right column -->
    <div
      class="flex flex-col w-full text-gray-300 items-center justify-evenly sm:rounded-r-xl"
    >
    <p class="text-2xl" v-if="store.state.timezonedb">{{ formattedDay }}</p>
    <p class="text-2xl" v-if="store.state.timezonedb">{{ formattedTime }}</p>
        <div v-if="store.state.weatherData">
          <div class="lg:tooltip" :data-tip="country">
            <img :src="`https://flagsapi.com/${country}/shiny/24.png`">
          </div>
        </div>
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
const description = computed(() => {
  return store.getters.getDescription;
});

const formattedTime = computed(() => {
  let time = store.getters.getLocalTime;
  const formattedTime = useDateFormat(time, 'HH:MM', { locales: 'en-US' })
  return formattedTime.value
})
const formattedDay = computed(() => {
  let time = store.getters.getLocalTime;
  const formattedDay = useDateFormat(time, 'dddd', { locales: 'en-US' })
  return formattedDay.value
})

</script>

<style scoped>

</style>