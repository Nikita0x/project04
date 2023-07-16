<template>
    <div class="text-orange-200">
        home
        <p>Count: {{ count }}</p>
        <button @click="increment">increment store's count</button>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex"
const store = useStore();
const count = computed(() => store.state.count)

function increment() {
    store.commit('increment')
}
</script>
