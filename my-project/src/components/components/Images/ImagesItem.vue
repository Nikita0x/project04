<template>
  <div
    class="flex flex-col justify-center items-center w-[240px] h-[200px] bg-[#374151] p-5 sm:p-0 rounded-x text-white hover:scale-105 rounded-lg transition cursor-pointer"
    v-for="item in hits"
    :key="item.id"
    @click="showModal(item)"
  >
      <img :src="item.previewURL" alt="images" />
      <div class="flex flex-col">
        <div class="flex items-center justify-start space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
          <p>{{ item.user }}</p>
        </div>
        <div class="flex items-center justify-start space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
          <p>{{ item.likes }}</p>
        </div>
      </div>
    </div>
    <!-- Modal component -->
  <Transition name="fade">
    <ModalImage v-if="selectedImage" :image="selectedImage" @close="closeModal"/>
  </Transition>

</template>

<script setup>
import { ref, computed, watch } from 'vue';
import store from '../../../store/store';
import ModalImage from "./ModalImage.vue"

const hits = computed(() => store.getters.getHits);
let images = ref([]);
// modal logic
const selectedImage = ref(null);

function showModal(image) {
  selectedImage.value = image;
}
function closeModal() {
  selectedImage.value = null;
}

if(hits) {
  // watch for changes
  watch(hits, (newValue) => {
    images.value = [...images.value, ...newValue];
  })
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  scale: 1.2;
}
</style>