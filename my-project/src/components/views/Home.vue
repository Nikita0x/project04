<template>
    <!-- search bar -->
    <header class="pt-5 ">
        <nav class="flex justify-center">
            <input type="text" placeholder="Search..." class="w-full max-w-xs input input-bordered" />
        </nav>
    </header>
    <!-- <Weather />
    <LeafletMap class="w-1/2 h-[20rem]" /> -->
    <OpenWeatherAPI />

</template>

<script setup>
import Weather from '../components/Weather.vue';
import LeafletMap from '../components/LeafletMap.vue';
import OpenWeatherAPI from '../components/LogicComponents/OpenWeatherApi.vue';

</script>
