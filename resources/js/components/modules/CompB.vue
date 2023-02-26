<template>
  <div class="m-classb">
    <h3>CompB コンポーネント</h3>
    <p>Count:{{ counter.count }}</p>
    <button @click="counter.addCount">+</button>
  </div>
</template>

<script setup>
import { counter } from "../../store/countstore";
</script>

<style lang="scss" scoped>
.m-classb {
  background: #ffffe0;
}
</style>
