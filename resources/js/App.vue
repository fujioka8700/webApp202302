<template>
  <div class="app">
    <h1>emit イベントを利用した更新</h1>
    <Hello :name="name" @changeNameEvent="handleEvent" />
  </div>
</template>

<script setup>
import Hello from "./components/modules/Hello.vue";
import { ref } from "vue";

const name = ref("John");

const handleEvent = () => {
  name.value = "Ken";
};
</script>

<style lang="scss" scoped>
.app {
  background: honeydew;
}
</style>
