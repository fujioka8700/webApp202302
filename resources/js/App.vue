<template>
  <div class="app">
    <h1>Vue3 入門 Components 2周目</h1>
    <TheHello :name="name" @changeNameEvent="handleEvent" />
  </div>
</template>

<script setup>
import TheHello from "./components/modules/TheHello.vue";
import { ref } from "vue";

const name = ref("よりつね");

const handleEvent = () => {
  name.value = "つねを";
};
</script>

<style lang="scss" scoped>
.app {
  background: #f0f8ff;
}
</style>
