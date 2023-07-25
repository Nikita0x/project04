<script setup>
import BottomNav from './components/components/BottomNav.vue'
// import ModalImage from "./components/components/Images/ModalImage.vue"
</script>

<template>
  <div class="flex items-center justify-center h-screen bg-slate-500">
    <div class="container h-screen w-[35rem] border border-green-400 mx-auto rounded-xl flex flex-col relative">
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