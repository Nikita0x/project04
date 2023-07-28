<template>
    <!-- Images.vue -->
    <div class="flex flex-col items-center">
        <ImagesContainer/>
        <LoadMore class="mb-20 "/>
    </div>
</template>

<script setup>
import LoadMore from "../components/LogicComponents/LoadMore.vue"
import ImagesContainer from '../components/ImagesContainer.vue'
</script>
