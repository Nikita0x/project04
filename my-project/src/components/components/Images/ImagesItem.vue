<template>
  <div
    class="flex flex-col justify-center items-center w-[240px] h-[200px] bg-red-200 p-5 sm:p-0 rounded-x text-zinc-800 hover:scale-105 transition cursor-pointer"
    v-for="item in hits"
    :key="item.id"
  >
    <img :src="item.previewURL" alt="images" />
    <p>By: {{ item.user }}</p>
    <p>{{ item.likes }} ❤️</p>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue';
import store from '../../../store/store';

const hits = computed(() => store.getters.getHits);
let images = ref([]);

if(hits) {
  // watch for changes
  watch(hits, (newValue) => {
    images.value = [...images.value, ...newValue];
  })
}
</script>
