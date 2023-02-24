<template>
  <div class="app">
    <h1>Input 要素をコンポーネント化</h1>
    <p>{{ name }}</p>
    <p>{{ address }}</p>
    <Input v-model="name" />
    <Input v-model="address" />
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
