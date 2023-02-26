<template>
  <div class="app">
    <h1>Vue3 入門 Components 2周目</h1>
    <h2>バリデーションの設定</h2>
    <p>{{ name }}</p>
    <p>{{ address }}</p>
    <TheInput v-model="name" />
    <TheInput v-model="address" />
    <TheHello :name="name" @changeNameEvent="inputHello" />
  </div>
</template>

<script setup>
import TheHello from "./components/modules/TheHello.vue";
import TheInput from "./components/modules/TheInput.vue";
import { ref } from "vue";

const name = ref("よりつね");
const address = ref("");

const inputHello = () => {
  console.log("文字に変更がありました。");
};
</script>

<style lang="scss" scoped>
.app {
  background: #f0f8ff;
}
</style>
