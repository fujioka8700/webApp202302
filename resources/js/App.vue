<template>
  <div class="app">
    <h1>Vue3 入門 Components 2周目</h1>
    <TheHello :name="name" :admin="admin" />
  </div>
</template>

<script setup>
import TheHello from "./components/modules/TheHello.vue";

const { name, admin } = {
  name: "よりつね",
  admin: true,
};
</script>

<style lang="scss" scoped>
.app {
  background: #f0f8ff;
}
</style>
