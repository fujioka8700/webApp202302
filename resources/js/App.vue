<template>
  <div class="app">
    <h1>Vue3 入門</h1>
    <TheHello />
    <TheHello />
    <TheHello />
  </div>
</template>

<script setup>
import TheHello from "./components/modules/TheHello.vue";
</script>

<style lang="scss" scoped>
.app {
  background: #f0f8ff;
}
</style>
