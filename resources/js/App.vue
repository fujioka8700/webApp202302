<template>
  <div>
    <h1>v-model ディレクティブ</h1>
    <p>{{ message }}</p>
    <input
      type="text"
      :value="message"
      @input="inputText($event.target.value)"
    />
    <button @click="clickButton">Click</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const message = ref("Hello World");

const inputText = (newText) => {
  message.value = newText;
};

const clickButton = () => {
  console.log(message.value);
};
</script>

<style lang="scss" scoped></style>
