<template>
  <div>
    <h1>watcher</h1>
    <button @click="count++">Count:{{ count }}</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const count = ref(0);

watch(
  count,
  (count) => {
    console.log(`Count:${count}`);
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped></style>
