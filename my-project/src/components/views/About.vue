<template>
    <div class="container max-w-[1200px] mx-auto border">
        about
        <p>Another country</p>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const openedPage = ref(false);
// when initially loaded, change the styles to show that the page is open
onMounted(() => {
    return openedPage.value = true;
})
// when unmounted, change the styles back to initial
onUnmounted(() => {
    return openedPage.value = false;
})
</script>

