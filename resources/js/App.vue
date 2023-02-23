<template>
  <div>
    <h1>reactiveの設定</h1>
    <button @click="state.count++">count is: {{ state.count }}</button>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  count: 0,
});
</script>

<style lang="scss" scoped></style>
