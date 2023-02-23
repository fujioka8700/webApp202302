<template>
  <div>
    <h1>reactiveの設定</h1>
    <button @click="addCount">count is: {{ state.count }}</button>
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
