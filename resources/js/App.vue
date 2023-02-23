<template>
  <div>
    <h1>Reactivity</h1>
    <h2>reactive</h2>
    <button @click="addCount">coint is:{{ state.count }}</button>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  count: 0,
});

const addCount = () => {
  state.count++;
};
</script>

<style lang="scss" scoped></style>
