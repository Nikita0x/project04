<template>
  <!-- modal -->
  <div @click="$emit('close')" v-if="image" class="fixed inset-0 z-10 flex items-center justify-center overflow-auto bg-black cursor-pointer backdrop-blur-sm bg-opacity-80 modal">
    <div @click.stop class="flex items-center justify-center min-w-[30rem]bg-black-400 modal-content cursor-default">
      <div class="flex flex-col items-center justify-center px-5 text-white">
        <div class="relative max-w-[60rem] overflow-auto">
          <img class="object-contain rounded-xl" :src="image.largeImageURL" alt="Larger Image">
          <div class="absolute bottom-0 flex flex-col p-2 bg-black sm:p-3 bg-opacity-80 rounded-tr-xl">
            <!-- uploaded by -->
            <div class="flex space-x-1 sm:space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-6 sm:h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p>{{ image.user }}</p>
            </div>
            <!-- views -->
            <div class="flex space-x-1 sm:space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-6 sm:h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p>{{ image.views }}</p>
            </div>
            <!-- likes -->
            <div class="flex space-x-1 sm:space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-6 sm:h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>

            <p>{{ image.likes }}</p>
            </div>
            <!-- tags -->
            <div class="hidden space-x-1 480px:flex sm:space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-6 sm:h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
            </svg>
            <p class="max-w-[17rem]"><span class="bg-blue-800 text-white-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{{image.tags}}</span></p>
            </div>
            <!-- original link -->
            <div class="flex space-x-1 sm:space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-6 sm:h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
              <p><a class="text-blue-500 hover:text-blue-700" target="_blank" :href="image.pageURL">click here</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: Object,
})

</script>
