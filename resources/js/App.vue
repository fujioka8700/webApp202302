<template>
  <div>
    <h1>Watcher</h1>
    <button @click="count++">Count:{{ count }}</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const count = ref(0);

watch(count, (count) => {
  console.log("count:", count);
});
</script>

<style lang="scss" scoped></style>
