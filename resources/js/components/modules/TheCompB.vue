<template>
  <div class="m-thecompb">
    <h3>CompB</h3>
    <p>Count:{{ counter.count }}</p>
    <button @click="counter.addCount">Count Up</button>
  </div>
</template>

<script setup>
import { counter } from "../../store/countstore2";
</script>

<style lang="scss" scoped>
.m-thecompb {
  background: #dcdcdc;
}
</style>
