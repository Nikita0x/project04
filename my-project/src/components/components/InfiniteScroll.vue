<template>
    <div
      v-if="store.state.pixabaydata"
      class="relative grid w-full grid-cols-2 p-5 mx-auto overflow-auto border border-red-600 h-3/4 gap-7"
    >
    <ImagesItems v-if="store.state.pixabaydata"/>
    </div>
    <div class="flex items-center justify-center w-full h-[40rem]" v-else>
      <p class="text-2xl ">No images so far 😭</p>
    </div>
  </template>
  
  <script setup>
  import store from "../../store/store";
  import ImagesItems from "./Images/ImagesItem.vue"

  </script>