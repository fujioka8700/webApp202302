<template>
  <div class="app">
    <h1>Vue3 入門 Components 2周目</h1>
    <h2>input 要素をコンポーネント化</h2>
    <p>{{ name }}</p>
    <p>{{ address }}</p>
    <TheInput v-model="name" />
    <TheInput v-model="address" />
  </div>
</template>

<script setup>
import TheInput from "./components/modules/TheInput.vue";
import { ref } from "vue";

const name = ref("よりつね");
const address = ref("");
</script>

<style lang="scss" scoped>
.app {
  background: #f0f8ff;
}
</style>
