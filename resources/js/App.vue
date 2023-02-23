<template>
  <div>
    <h1>Reactivity</h1>
    <button @click="count++">coint is:{{ count }}</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<style lang="scss" scoped></style>
