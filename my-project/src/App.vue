<script setup>
import Home from "./components/Home.vue"
import About from "./components/About.vue"
</script>

<template>
  <div class="text-3xl font-bold underline bg-red-400">
    <router-link to="/">Home</router-link> ||
    <router-link to="/about">About</router-link>
    <router-view/>
  </div>
</template>

