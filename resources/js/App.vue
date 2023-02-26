<template>
  <div class="app">
    <h1>Provide / Inject 子コンポーネントで更新</h1>
    <CompA />
  </div>
</template>

<script setup>
import CompA from "./components/modules/CompA.vue";
import { ref, provide } from "vue";

const count = ref(0);

const addCount = () => {
  count.value++;
};

provide("count", count);
provide("addCount", addCount);
</script>

<style lang="scss" scoped>
.app {
  background: #f0f8ff;
}
</style>
