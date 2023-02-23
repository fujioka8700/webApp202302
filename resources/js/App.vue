<template>
  <div>
    <h1>typeof について</h1>
    <input type="text" v-model="form.message" />
    <button @click="clickButton">Click</button>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const form = reactive({
  message: 0,
});

const clickButton = () => {
  console.log(typeof form.message);
};
</script>

<style lang="scss" scoped></style>
