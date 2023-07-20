<template>
  <div id="map" class=" z-0 mx-auto border border-black rounded-xl"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import "leaflet/dist/leaflet.css"
import L from 'leaflet';
onMounted(() => {
  let map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
});
</script>

