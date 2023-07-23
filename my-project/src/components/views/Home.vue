<template>
    <SearchInput class="pt-10"/>
    <!-- <OpenWeatherAPI/> -->
    <div class="flex">
        <Weather /> 
    </div>
    <AdditionalInfo />
    <LeafletMap class=" w-4/5 h-[18rem] mt-10 pb-72" />

</template>

<script setup>
import Weather from '../components/Weather.vue';
import LeafletMap from '../components/LeafletMap.vue';
import SearchInput from '../components/SearchInput.vue';
import AdditionalInfo from "../components/AdditionalInfo.vue"


</script>
