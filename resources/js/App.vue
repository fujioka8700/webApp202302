<template>
  <div class="app">
    <h1>Vue3 入門 Components 2周目</h1>
    <TheHello @notification="handleEvent" />
  </div>
</template>

<script setup>
import TheHello from "./components/modules/TheHello.vue";

const handleEvent = () => {
  console.log("子コンポーネントからの通知");
};
</script>

<style lang="scss" scoped>
.app {
  background: #f0f8ff;
}
</style>
