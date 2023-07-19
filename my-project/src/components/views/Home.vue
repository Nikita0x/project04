<template>
    <SearchInput/>
    <!-- <OpenWeatherAPI/> -->
    <div class="flex">
        <Weather /> 
    </div>
    <AdditionalInfo />
    <!-- <LeafletMap class="w-1/2 h-[20rem]" /> -->

</template>

<script setup>
import Weather from '../components/Weather.vue';
import LeafletMap from '../components/LeafletMap.vue';
import SearchInput from '../components/SearchInput.vue';
import AdditionalInfo from "../components/AdditionalInfo.vue"
import OpenWeatherAPI from "../components/LogicComponents/OpenWeatherAPI.vue"


</script>
