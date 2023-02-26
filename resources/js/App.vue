<template>
  <div class="app">
    <h1>Vue3 入門 Components 2周目</h1>
    <TheHello :name="name" />
    <input type="text" v-model="name" />
  </div>
</template>

<script setup>
import TheHello from "./components/modules/TheHello.vue";
import { ref } from "vue";

const name = ref("よりつね");
</script>

<style lang="scss" scoped>
.app {
  background: #f0f8ff;
}
</style>
