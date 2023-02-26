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
const count = ref(0);
const addCount = () => {
  count.value++;
};

provide("message", message);
provide("count", count);
provide("addCount", addCount);
</script>

<style lang="scss" scoped>
.app {
  background: #f0f8ff;
}
</style>
