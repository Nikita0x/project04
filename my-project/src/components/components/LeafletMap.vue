<template>
    <div id="map" class="z-0 mx-auto mb-16 rounded-xl"></div>
</template>

<script setup>
import { watch, nextTick, computed, onMounted } from 'vue';
import "leaflet/dist/leaflet.css"
import L, { map } from 'leaflet';
import { useStore } from 'vuex';
const store = useStore();

const lat = computed(() => {
  if(store.getters.getLat) {
    return store.getters.getLat;
  } else {
    console.error('API call to openweather failed.')
    return null
  }
});
const lon = computed(() => {
  if(store.getters.getLon) {
    return store.getters.getLon;
  } else {
    console.error('API call to openweather failed.')
    return null
  }
});

let mapInstance = null; // Store the map instance in a variable


// initialize the map on Mount
onMounted(() => {
  if(!lat.value && !lon.value) {
    return
  } else {
    renderMap(lat.value, lon.value)
  }
})

// watch for changes
watch(lat, (newValue, oldValue) => {
  nextTick(() => {
    if(lat.value && lon.value) {
      renderMap(lat.value, lon.value)
    } else if (lat.value === null || lon.value === null) {
      console.log('lat.value OR lon.value === null')
      return
    } else if (lat.value === undefined || lon.value === undefined) {
      console.log('lat.value OR lon.value === undefined')
      return
    }
  })  
})



function renderMap(lat, lon) {
  // Check if the map container exists
  const mapContainer = document.getElementById('map');
  if (!mapContainer) {
    console.log('no map container found');
    return;
  }

  // If a map instance already exists, remove it before creating a new one
  if (mapInstance) {
    mapInstance.remove();
  }

  // Create a new map instance
  mapInstance = L.map('map').setView([lat, lon], 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(mapInstance);
  

  L.marker([lat, lon]).addTo(mapInstance);
}
</script>
