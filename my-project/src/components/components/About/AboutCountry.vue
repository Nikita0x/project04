<template>
  <div class="container max-w-[1200px] mx-auto flex justify-center items-center">
    <div v-if="store.state.restCountries" class="mx-auto shadow-xl card bg-base-100">
      <figure class="border border-gray-700 rounded-xl">
        <img
          class="h-full w-96"
          :src="coatOfArms"
          alt="Coat of Arms"
        />
      </figure>
      <div class="text-gray-300 card-body">
        <p class="text-xl">Continent:  {{ continent }}</p>
        <p  class="text-xl">Independent:  {{ independent }}</p>
        <p  class="text-xl">Capital: {{ capital }}</p>
        <p  class="text-xl">Languages:  {{ languages }}</p>
        <p  class="text-xl">Population:  {{ population }}</p>
        <p  class="text-xl">Currency:  {{ currencyName }} ( {{ currencySymbol }} )</p>
        <p  class="text-xl">UN Member:  {{ unMember }}</p>
      </div>
    </div>
    <div class="flex items-center justify-center h-[40rem]" v-else>
      <p class="text-2xl text-gray-300">No data so far 😭</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const capital = computed (() => {
    return store.getters.getCapital
})
const coatOfArms = computed (() => {
    return store.getters.getCoatOfArms
})
const independent = computed (() => {
    if(store.getters.getIndependent === true) {
        return "Yes"
    } else {
        return 'No'
    }
})
const languages = computed (() => {
    if(store.state.restCountries) {
        const langObj = store.getters.getLanguages;
    const langArr = Object.values(langObj).toString()
    return langArr
    }
})
const population = computed (() => {
    return store.getters.getPopulation
})
const unMember = computed (() => {
    if(store.getters.getUnMember === true) {
        return "Yes"
    } else {
        return 'No'
    }
})
const currencyName = computed(() => {
  return store.getters.getCurrencyName;
});
const currencySymbol = computed(() => {
  return store.getters.getCurrencySymbol;
});
const continent = computed(() => {
  return store.getters.getContinent;
});




</script>
