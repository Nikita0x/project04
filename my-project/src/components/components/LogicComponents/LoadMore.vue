<template>
    <!-- when there is data -->
    <button @click="loadMore" v-if="store.state.pixabaydata && isLoading === false" class="flex mb-20 w-36 btn btn-neutral">load more</button>
    <!-- show loading when fetching data -->
    <button v-else="!store.state.pixabaydata && isLoading === true" class="flex mb-20 w-36 btn btn-neutral">
        <span class="loading loading-bars loading-sm"></span>
    </button>
</template>

<script setup>
import { ref,computed } from "vue";
import { useStore } from "vuex";
const PIXABAY_API = import.meta.env.VITE_PIXABAY_API;
const store = useStore();

const isLoading = ref(false)
const page = ref(2)


const city = computed(() => {
    if(store.getters.getCity) {
        const word = store.getters.getCity.toLowerCase();
        return encodeURIComponent(word);
    }
})

// fetching api
function loadMore() {
    isLoading.value = true;
//calling pixabay api
  async function fetchPixabay() {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${PIXABAY_API}&q=${city.value}&image_type=photo&page=${page.value}`
    );
    console.log(response)
    page.value++
    console.log(page)
    const data = await response.json();
    store.commit('setPixabaydata', data);
    isLoading.value = false;
    console.log(isLoading.value)
  } catch (error) {
    console.error(error);
  }
  }
  fetchPixabay()
}

</script>