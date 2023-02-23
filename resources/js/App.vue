<template>
  <div>
    <h1>入力フォーム</h1>
    <p>{{ message }}</p>
    <input v-model.trim="message" type="text" />
    <button @click="clickButton">Click</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const message = ref("Hello World");

const clickButton = () => {
  console.log(message.value);
};
</script>

<style lang="scss" scoped></style>
