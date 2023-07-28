<script setup>
import BottomNav from './components/components/BottomNav.vue'
// import ModalImage from "./components/components/Images/ModalImage.vue"
</script>

<template>
  <div class="flex items-center justify-center h-screen text-xs bg-[#1D232A] sm:text-sm md:text-base">
    <div class="container w-[40rem] h-screen relative flex flex-col mx-auto border border-gray-300 rounded-xl">
      <transition>
        <div class="overflow-auto">
          <router-view/>
          <BottomNav class="absolute bottom-0"/>
        </div>
      </transition>
    </div>
  </div>
  <!-- <ModalImage/> -->
</template>

<style scoped>

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>