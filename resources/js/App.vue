<template>
  <div class="app">
    <h1>Provide / Inject 子コンポーネントで更新</h1>
    <CompA />
  </div>
</template>

<script setup>
import CompA from "./components/modules/CompA.vue";
</script>

<style lang="scss" scoped>
.app {
  background: #f0f8ff;
}
</style>
