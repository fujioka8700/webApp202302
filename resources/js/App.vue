<template>
  <div>
    <h1>Watcher</h1>
    <button @click="count++">Count:{{ count }}</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const count = ref(0);

watch(count, (count, previousCount) => {
  console.log("count:", count);
  console.log("previousCount:", previousCount);
});
</script>

<style lang="scss" scoped></style>
