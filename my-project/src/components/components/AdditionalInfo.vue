<template>
<div>

  <!-- accordion with pure css -->
  <Accordion  v-if="store.state.weatherData">
    <template v-slot:title>
      <p>More details</p>
    </template>
    <template v-slot:content>
    <MoreDetails>
      <template v-slot:image>
        <img src="../../assets/img/temperature.svg" alt="Temperature">
      </template>
      <template v-slot:title>
        <p v-if="store.state.weatherData">Feels like: {{feels_like}}°C</p>
      </template>
      <template v-slot:description>
        <p v-if="store.state.weatherData">Temperature tells us how hot or cold something is. It affects our clothes, activities, and comfort. Whether it's a warm day at the beach or a cozy night indoors, temperature plays a big role in our daily lives.
        </p>
      </template>
    </MoreDetails>
    <MoreDetails>
      <template v-slot:image>
        <img src="../../assets/img/sunrise.svg" alt="Sunrise">
      </template>
      <template v-slot:title>
        <p v-if="store.state.weatherData">Sunrise: {{sunrise}}</p>
      </template>
      <template v-slot:description>
        <p>The magical moment when the sun appears above the horizon, marking the beginning of a new day.
        </p>
      </template>
    </MoreDetails>
    <MoreDetails>
      <template v-slot:image>
        <img src="../../assets/img/sunset.svg" alt="Sunset">
      </template>
      <template v-slot:title>
        <p v-if="store.state.weatherData">Sunset: {{sunset}}</p>
      </template>
      <template v-slot:description>
        <p>The enchanting time when the sun dips below the horizon, painting the sky with breathtaking colors.
        </p>
      </template>
    </MoreDetails>
    <MoreDetails>
      <template v-slot:image>
        <img src="../../assets/img/compass3.svg" alt="Coordinates">
      </template>
      <template v-slot:title>
        <p v-if="store.state.weatherData">Longitude: {{lon}}</p>
      </template>
      <template v-slot:title2>
        <p v-if="store.state.weatherData">Latitude: {{lat}}</p>
      </template>
      <template v-slot:description>
        <p>Longitude is a geographic coordinate that specifies the east–west position of a point on the surface of the Earth, or another celestial body.</p>
      </template>
    </MoreDetails>
    <MoreDetails>
      <template v-slot:image>
        <img src="../../assets/img/pressure.svg" alt="Pressure">
      </template>
      <template v-slot:title>
        <p v-if="store.state.weatherData">Pressure: {{pressure}} hPa</p>
      </template>
      <template v-slot:description>
        <p>Meteorologists use pressure to predict weather changes, while we experience its effects in various ways. From clear skies under high-pressure systems to possible storms in low-pressure areas.
        </p>
      </template>
    </MoreDetails>

    </template>
  </Accordion>
</div>
</template>

<script setup>
import Accordion from "./UtilityComponents/Accordion.vue"
import MoreDetails from "./Home/MoreDetails.vue"
import { computed } from 'vue';
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
  return store.getters.getLat.toFixed(1);
});
const lon = computed(() => {
  return store.getters.getLon.toFixed(1);
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
const pressure = computed(() => {
  return store.getters.getPressure;
});
const timezone = computed(() => {
  return store.getters.getTimezone;
});
const sunset = computed(() => {
  const time = getTime(store.getters.getSunset + timezone.value)
  const split = time.slice(0, 5)
  return split
});

const sunrise = computed(() => {
  const time = getTime(store.getters.getSunrise + timezone.value)
  const split = time.slice(0, 5)
  return split
});

function getTime(seconds) {
  return new Date(seconds * 1000).toLocaleTimeString('ru-RU', {timeZone: 'Atlantic/Reykjavik'})
}
</script>
