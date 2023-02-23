<template>
  <div>
    <h1>Reactivity</h1>
    <button @click="addCount">coint is:{{ count }}</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);

const addCount = () => {
  count.value++;
};
</script>

<style lang="scss" scoped></style>
