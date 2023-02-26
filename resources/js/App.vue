<template>
  <div class="app">
    <h1>Vue3 入門 Components 2周目</h1>
    <h2>Provide / Inject でデータ渡し</h2>
    <input type="text" v-model="message" />
    <TheCompA />
  </div>
</template>

<script setup>
import TheCompA from "./components/modules/TheCompA.vue";
import { provide, ref } from "vue";

const message = ref("Provide / Inject でデータ渡し");

provide("message", message);
</script>

<style lang="scss" scoped>
.app {
  background: #f0f8ff;
}
</style>
