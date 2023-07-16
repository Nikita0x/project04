<template>
    <div class="container max-w-[1200px] mx-auto border">
        about
        <p>Another count: {{ count }}</p>
    </div>
</template>

<script setup>
import {useStore} from "vuex"
// const apiKey = import.meta.env.VITE_API_KEY
import { computed } from "vue";
const store = useStore();
const count = computed(() => store.state.count)
</script>
