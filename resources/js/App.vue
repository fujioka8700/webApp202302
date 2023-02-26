<template>
  <div class="app">
    <h1>Vue3 入門 Components 2周目</h1>
    <h2>input 要素をコンポーネント化</h2>
    <p>{{ name }}</p>
    <p>{{ address }}</p>
    <TheInput :model-value="name" @update:model-value="name = $event" />
    <TheInput :model-value="address" @update:model-value="address = $event" />
  </div>
</template>

<script setup>
import TheInput from "./components/modules/TheInput.vue";
import { ref } from "vue";

const name = ref("よりつね");
const address = ref("");

const handleEvent = (newName) => {
  name.value = newName;
};
</script>

<style lang="scss" scoped>
.app {
  background: #f0f8ff;
}
</style>
