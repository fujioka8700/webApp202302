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

const handleEvent = (newUser) => {
  name.value = `${newUser.firstName} ${newUser.lastName}`;
};
</script>

<style lang="scss" scoped>
.app {
  background: #f0f8ff;
}
</style>
