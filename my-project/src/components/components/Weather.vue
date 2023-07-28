<template>
<div v-if="store.state.weatherData" class="grid grid-cols-1 p-5 space-y-5 text-gray-300 sm:space-y-0 place-items-center sm:place-items-start sm:grid-cols-2">

  <!-- grid left -->
  <div class="grid w-full grid-cols-4 gap-1 p-3 text-gray-300">
    <div class="col-span-2 sm:col-span-1">
      <div class="flex justify-center">
        <img class="h-8" src="/weather_mini/city.svg">
      </div>
      <div class="flex justify-center">
        <img class="h-8" :src="`/weather-main/${description}.png`" alt="weather">
      </div>
      <div class="flex justify-center fill-gray-300">
        <svg class="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 15.9998c-.55228 0-1 .4477-1 1s.44772 1 1 1 1-.4477 1-1-.44772-1-1-1Zm0 0L8.00707 12M8 16.9998l.00707.0071M20 5c0 1.10457-.8954 2-2 2s-2-.89543-2-2 .8954-2 2-2 2 .89543 2 2Zm-8 11.9998c0 2.2092-1.7909 4-4 4-2.20914 0-4-1.7908-4-4 0-1.0144.37764-1.9407 1-2.6458V6c0-1.65685 1.34315-3 3-3s3 1.34315 3 3v8.354c.6224.7051 1 1.6314 1 2.6458Z"/></svg>
      </div>
    </div>
    <div class="cols-span-2 sm:col-span-3 ">
      <p class="text-2xl">{{city}}</p>
      <p class="text-2xl">{{description}}</p>
      <p class="text-2xl">{{ temp }}°C</p>
    </div>
  </div>

  <!-- grid right -->
  <div class="grid w-full grid-cols-4 gap-1 p-3 ">
    <div class="col-span-2 text-gray-300 stroke-current sm:col-span-1">
      <div class="flex justify-center ">
        <svg class="h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"/>
</svg>
      </div>
      <div class="flex justify-center ">
        <svg  class="h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"/>
<path d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2343 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.5459 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z"/>
</svg>
      </div>
      <div class="flex justify-center ">
        <img class="w-12 h-8" :src="`/countries/svg/${countryLowerCase}.svg`">
      </div>
    </div>
    <div class="cols-span-2 sm:col-span-3">
      <p class="text-2xl">{{formattedDay}}</p>
      <p class="text-2xl">{{formattedTime}}</p>
      <p class="text-2xl">{{country}}</p>
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
  if(store.getters.getCountry) {
    console.log(`Country:` + store.getters.getCountry)
    return store.getters.getCountry
  }
})
const countryLowerCase = computed(() => {
  if(store.state.weatherData) {
    return store.getters.getCountry.toLowerCase();
  }
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