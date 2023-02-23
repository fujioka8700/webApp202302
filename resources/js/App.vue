<template>
  <div>
    <h1>v-model ディレクティブ</h1>
    <p>{{ inputNumber }}</p>
    <input type="text" v-model.number="inputNumber" />
    <button @click="clickButton">Click</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const inputNumber = ref(null);

const clickButton = () => {
  console.log(inputNumber.value);
};
</script>

<style lang="scss" scoped></style>
