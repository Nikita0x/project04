<template>
    <div class="text-green-600 ">
        about
    </div>
    <h1>{{ apiKey }} - api key</h1>
</template>

<script setup>
const apiKey = import.meta.env.VITE_API_KEY
console.log(apiKey)
</script>
