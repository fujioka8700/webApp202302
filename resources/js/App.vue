<template>
  <div class="app">
    <h1>Vue3 入門 Components 2周目</h1>
    <h2>Provide / Inject でデータ渡し</h2>
    <TheCompA />
  </div>
</template>

<script setup>
import TheCompA from "./components/modules/TheCompA.vue";
import { provide } from "vue";

provide("message", "Provide / Inject でデータ渡し");
</script>

<style lang="scss" scoped>
.app {
  background: #f0f8ff;
}
</style>
