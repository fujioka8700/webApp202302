<template>
  <div class="app">
    <h1>Vue3 入門 Components 2周目</h1>
    <TheHello class="active" style="color: blue" />
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
