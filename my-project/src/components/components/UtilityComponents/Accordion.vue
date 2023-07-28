<template>
  <div class="text-gray-300 border ">
    <button
      @click="accordionOpen = !accordionOpen"
      class="w-full h-20 text-start bg-[#1D232A] hover:bg-[#252d35] transition duration-300"
    >
    <div class="flex items-center pl-5 space-x-5 text-2xl">
      <slot name="title">Title here</slot>
      <!-- arrow -->
      <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="`w-5 h-5 transition-all ${accordionOpen ? `rotate-180` : `` }`">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
</svg>

        </span>
    </div>
    </button>
    <Transition name="accordion">
        <div v-if="accordionOpen">
        <div class="accordion-content animate__animated animate__bounceInDown">
            <slot name="content">Content here</slot>
        </div>
        </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const accordionOpen = ref(false);
</script>

<style scoped>

.accordion-enter-active,
.accordion-leave-active {
  transition: opacity 0.5s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
}
</style>