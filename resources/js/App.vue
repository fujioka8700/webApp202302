<template>
  <div>
    <h1>input要素 reactiveではない</h1>
    <p>{{ message }}</p>
    <input type="text" v-model="message" />
    <button @click="clickButton">Click</button>
  </div>
</template>

<script setup>
const message = "Hello World";

const clickButton = () => {
  console.log(message);
};
</script>

<style lang="scss" scoped></style>
