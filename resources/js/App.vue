<template>
  <div class="app">
    <h1>Vue3 入門 Components 2周目</h1>
    <h2>reactiveを利用してデータ共有</h2>
    <TheCompA />
  </div>
</template>

<script setup>
import TheCompA from "./components/modules/TheCompA.vue";
</script>

<style lang="scss" scoped>
.app {
  background: #f0f8ff;
}
</style>
