<template>
  <div class="app">
    <h1>Vue3 入門 Components 2周目</h1>
    <h2>Dynamic コンポーネント</h2>
    <div>
      <button @click="city = 'tokyo'">東京</button>
      <button @click="city = 'osaka'">大阪</button>
    </div>
    <TheTokyo v-if="city === 'tokyo'" />
    <TheOsaka v-else />
  </div>
</template>

<script setup>
import TheTokyo from "./components/modules/TheTokyo.vue";
import TheOsaka from "./components/modules/TheOsaka.vue";
import { ref } from "vue";

const city = ref("tokyo");
</script>

<style lang="scss" scoped>
.app {
  background: #f0f8ff;
}
</style>
