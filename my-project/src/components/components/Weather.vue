<template>
  <div
    class="w-full h-28 bg-[#1D232A] shadow-xl flex flex-col sm:flex-row pb-5"
  >
  <!-- left column -->
    <div
      class="flex flex-col items-center w-full text-gray-300 justify-evenly sm:rounded-l-xl"
    >
      <p v-if="store.state.weatherData" class="pt-5 text-2xl">{{ city }}</p>
        <div v-if="store.state.weatherData" class="flex text-2xl">
        {{ main }}
        <div class="flex items-center justify-center w-10 h-10 lg:tooltip" :data-tip="description">
          <img
            class="ml-2"
            :src="`http://openweathermap.org/img/w/${icon}.png`"
          />
        </div>
      </div>
      <p v-if="store.state.weatherData" class="text-2xl">{{ temp }} <span v-if="temp">°C</span></p>
    </div>
    <!-- right column -->
    <div
      class="flex flex-col items-center w-full text-gray-300 justify-evenly sm:rounded-r-xl"
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
  if(store.getters.getDescription) {
    return store.getters.getDescription;
  } else {
    console.error('incorrect city name')
    return null
  }
});

const formattedTime = computed(() => {
  if(store.getters.getLocalTime) {
    let time = store.getters.getLocalTime;
    const [datePart, timePart] = time.split(' ')
    const newTime = timePart.split(":");
    const formatted = `${newTime[0]}:${newTime[1]}`
    return formatted
  } else {
    console.error('incorrect city name')
    return null
  }
})
const formattedDay = computed(() => {
  let time = store.getters.getLocalTime;
  const formattedDay = useDateFormat(time, 'dddd', { locales: 'en-US' })
  return formattedDay.value
})


</script>

<style scoped>

</style>