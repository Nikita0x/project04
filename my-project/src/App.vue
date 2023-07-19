<script setup>
import BottomNav from './components/components/BottomNav.vue'
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="container h-[45rem] w-[35rem] border mx-auto rounded-xl flex flex-col relative">
      <transition>
        <div>
          <router-view/>
          <BottomNav class="absolute bottom-0"/>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>