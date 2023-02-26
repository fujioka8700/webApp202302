<template>
  <div class="app">
    <h1>Vue3 入門 Components 2周目</h1>
    <h2>Slot</h2>
    <TheUser>
      <span>冷報学園</span>
    </TheUser>
  </div>
</template>

<script setup>
import TheUser from "./components/modules/TheUser.vue";
</script>

<style lang="scss" scoped>
.app {
  background: #f0f8ff;
}
</style>
