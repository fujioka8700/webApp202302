<template>
  <div>
    <h1>refでも可能だが、不細工。</h1>
    <button @click="addCount">count is: {{ state.count }}</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const state = ref({
  count: 0,
});

const addCount = () => {
  state.value.count++;
};
</script>

<style lang="scss" scoped></style>
