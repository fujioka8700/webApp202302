<template>
  <div class="m-hello-pinia">
    <h3>Hello Pinia</h3>
    <p>カウント:{{ counter.count }}</p>
    <button @click="counter.$reset">リセット</button>
  </div>
</template>

<script setup>
import { useStoreCounter } from "../../store/counter";
const counter = useStoreCounter();
</script>

<style lang="scss" scoped>
.m-hello-pinia {
  background: #f0ffff;
}
</style>
