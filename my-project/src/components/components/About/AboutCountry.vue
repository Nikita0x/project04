<template>
  <div class="container max-w-[1200px] mx-auto flex justify-center items-center">
    <div v-if="store.state.restCountries" class="mx-auto shadow-xl card bg-base-100">
      <!-- coat of arms -->
      <MoreDetails class="text-gray-300">
      <template v-slot:image>
        <img :src="coatOfArms" alt="Coat of arms">
      </template>
      <template v-slot:title>
        <p v-if="store.state.weatherData">Coat of arms</p>
      </template>
      <template v-slot:description>
        <p v-if="store.state.weatherData">A country's coat of arms serves as a powerful emblem, encapsulating its founding principles, struggles, and triumphs. It stands as a visual testament to the nation's resilience and unity, inspiring a sense of patriotism and belonging among its citizens.
        </p>
      </template>
    </MoreDetails>
      <!-- cards -->
      <div class="text-gray-300 card-body">
        <!-- continent -->
        <MoreDetails>
      <template v-slot:image>
        <div v-if="continent === 'Africa'">
          <img  src="/about_svg/continent/europe(africa).svg" alt="Africa">
        </div>
        <div v-else-if="continent === 'Antarctica'">
          <img src="/about_svg/continent/antarctica.svg" alt="Antarctica">
        </div>
        <div v-else-if="continent === 'Asia'">
          <img src="/about_svg/continent/asia(oceania).svg" alt="Asia">
        </div>
        <div v-else-if="continent === 'Europe'">
          <img src="/about_svg/continent/europe(africa).svg" alt="Europe">
        </div>
        <div v-else-if="continent === 'North America'">
          <img src="/about_svg/continent/north(south)_america.svg" alt="North America">
        </div>
        <div v-else-if="continent === 'South America'">
          <img src="/about_svg/continent/north(south)_america.svg" alt="South America">
        </div>
        <div v-else-if="continent === 'Oceania'">
          <img src="/about_svg/continent/asia(oceania).svg" alt="Oceania">
        </div>
      </template>



      <template v-slot:title>
        <p v-if="store.state.weatherData">Continent: {{continent}}</p>
      </template>
      <template v-slot:description>
        <p v-if="store.state.weatherData">Each continent showcases unique landscapes, cultures, and histories, forming the rich tapestry of human civilization.
        </p>
      </template>
    </MoreDetails>
    <!-- independent -->
    <MoreDetails>
      <template v-slot:image>
        <div v-if="independent === 'Yes'">
          <img  src="/about_svg/independent.svg" alt="Independent">
        </div>
        <div v-else-if="independent === 'No'">
          <img src="/about_svg/independent_not.svg" alt="Not independent">
        </div>

      </template>
      <template v-slot:title>
        <p v-if="store.state.weatherData">Independent: {{independent}}</p>
      </template>
      <template v-slot:description>
        <p v-if="store.state.weatherData">Some countries have fought hard for their independence, gaining the freedom to govern themselves and shape their destinies. On the other hand, some territories remain under the rule of other nations or are part of larger unions.
        </p>
      </template>
    </MoreDetails>
        <!-- capital -->
        <MoreDetails>
      <template v-slot:image>
        <img v-if="capital" src="/about_svg/capital.svg" alt="Capital">
      </template>
      <template v-slot:title>
        <p v-if="store.state.weatherData">Capital: {{capital}}</p>
      </template>
      <template v-slot:description>
        <p v-if="store.state.weatherData">Capital serves as the seat of government and often houses significant landmarks and historical sites. Capital cities hold the essence of a country's identity, embodying its values, aspirations, and heritage.
        </p>
      </template>
    </MoreDetails>
        <!-- languages -->
        <MoreDetails>
      <template v-slot:image>
        <img src="/about_svg/languages.svg" alt="Languages">
      </template>
      <template v-slot:title>
        <p v-if="store.state.weatherData">Languages: {{languages}}</p>
      </template>
      <template v-slot:description>
        <p v-if="store.state.weatherData">Languages are a captivating reflection of a country's cultural diversity and heritage. Each nation boasts its unique linguistic tapestry, woven through centuries of history and interaction.
        </p>
      </template>
    </MoreDetails>
        <!-- population -->
        <MoreDetails>
      <template v-slot:image>
        <img src="/about_svg/population.svg" alt="Population">
      </template>
      <template v-slot:title>
        <p v-if="store.state.weatherData">Population: {{population}} people</p>
      </template>
      <template v-slot:description>
        <p v-if="store.state.weatherData">The ebb and flow of human presence define a country's population, capturing the essence of its societal fabric.
        </p>
      </template>
    </MoreDetails>
        <!-- currency -->
        <MoreDetails>
      <template v-slot:image>
        <img src="/about_svg/currency.svg" alt="Currency">
      </template>
      <template v-slot:title>
        <p v-if="store.state.weatherData">Currency: {{ currencyName }} ( {{currencySymbol}} )</p>
      </template>
      <template v-slot:description>
        <p v-if="store.state.weatherData">Currencies play a crucial role in facilitating transactions and fostering economic ties between countries. Each nation boasts its own currency, carrying the unique symbols and values of its heritage.
        </p>
      </template>
    </MoreDetails>
        <!-- UN member -->
        <MoreDetails>
      <template v-slot:image>
        <div v-if="unMember === 'Yes'">
          <img  src="/about_svg/un.svg" alt="United Nations Member - Yes">
        </div>
        <div v-else-if="unMember === 'No'">
          <img src="/about_svg/un_not.svg" alt="United Nations Member - No">
        </div>
      </template>
      <template v-slot:title>
        <p v-if="store.state.weatherData">United Nations member: {{unMember}}</p>
      </template>
      <template v-slot:description>
        <p v-if="store.state.weatherData">The United Nations (UN) is an intergovernmental organization fostering global cooperation and dialogue. It aims to address pressing issues, such as peacekeeping, human rights, and sustainable development.
        </p>
      </template>
    </MoreDetails>
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
import MoreDetails from '../Home/MoreDetails.vue'
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
