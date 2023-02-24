<template>
  <div class="app">
    <h1>reactive な変数を渡したい場合</h1>
    <Hello :name="name" />
    <button @click="changeName">Change Name</button>
  </div>
</template>

<script setup>
import Hello from "./components/modules/Hello.vue";
import { ref } from "vue";

const name = ref("John");

const changeName = () => {
  name.value = "Raou";
};
</script>

<style lang="scss" scoped>
.app {
  background: honeydew;
}
</style>
