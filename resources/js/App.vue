<template>
  <div>
    <h1>Watcher + reactive</h1>
    <button @click="state.count++">Count:{{ state.count }}</button>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";
const state = reactive({
  count: 0,
});

watch(
  () => state.count,
  (count, previousCount) => {
    console.log("count:", count);
    console.log("previousCount:", previousCount);
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped></style>
