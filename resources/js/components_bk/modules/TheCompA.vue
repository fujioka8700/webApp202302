<template>
  <div class="m-thecompa">
    <h3>CompA</h3>
    <p>Count:{{ counter.count }}</p>
    <button @click="counter.addCount">Count Up</button>
    <TheCompB />
  </div>
</template>

<script setup>
import { counter } from "../../store/countstore2";
import TheCompB from "./TheCompB.vue";
</script>

<style lang="scss" scoped>
.m-thecompa {
  background: #ffefd5;
}
</style>
