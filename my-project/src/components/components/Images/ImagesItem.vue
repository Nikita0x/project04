<template>
  <div
    class="flex flex-col justify-center items-center w-[240px] h-[200px] border border-black bg-red-200 rounded-xl text-black hover:scale-105 transition cursor-pointer"
    v-for="item in hits"
    :key="item.id"
  >
    <img :src="item.previewURL" alt="images" />
    <p>{{ item.user }}</p>
    <p>❤️ {{ item.likes }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import store from '../../../store/store';

const isLoading = ref(false);

const hits = computed(() => store.getters.getHits);
</script>
