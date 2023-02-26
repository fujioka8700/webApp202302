<template>
  <div class="m-classa">
    <h2>CompA コンポーネント</h2>
    <p>Count:{{ counter.count }}</p>
    <CompB />
  </div>
</template>

<script setup>
import CompB from "./CompB.vue";
import { counter } from "../../store/countstore";
</script>

<style lang="scss" scoped>
.m-classa {
  background: #fdf5e6;
}
</style>
