<template>
  <div class="app">
    <h1>Input 要素をコンポーネント化</h1>
    <p>{{ name }}</p>
    <p>{{ address }}</p>
    <Input :model-value="name" @update:model-value="name = $event" />
    <Input :model-value="address" @update:model-value="address = $event" />
  </div>
</template>

<script setup>
import Input from "./components/modules/Input.vue";
import { ref } from "vue";

const name = ref("John");
const address = ref("");
</script>

<style lang="scss" scoped>
.app {
  background: honeydew;
}
</style>
