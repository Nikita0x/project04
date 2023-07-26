<template>
    <div
      v-if="store.state.pixabaydata && hits.length !== 0 "
      class="relative grid w-full grid-cols-1 p-5 pb-10 mx-auto overflow-auto place-items-center sm:grid-cols-2 h-3/4 gap-7"
    >
    <ImagesItems v-if="store.state.pixabaydata"/>
    </div>
    <div class="flex items-center justify-center w-full h-[40rem]" v-else-if="store.state.pixabaydata">
      <p class="text-2xl text-gray-300 ">No images available 😞</p>
    </div>
    <div class="flex items-center justify-center w-full h-[40rem]" v-else>
      <p class="text-2xl text-gray-300 ">No data so far 😭</p>
    </div>
  </template>
  
  <script setup>
  import store from "../../store/store";
  import ImagesItems from "./Images/ImagesItem.vue"
  import { computed } from "vue";
  const hits = computed(() => store.getters.getHits);


  </script>