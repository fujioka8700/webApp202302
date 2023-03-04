<template>
  <div>
    <h2>HomeView</h2>
    <p>Count: {{ counter.count }}</p>
    <div>
      <button @click="counter.increment">Up</button>
    </div>
    <HelloPinia />
  </div>
</template>

<script setup>
import { useStoreCounter } from "../../store/counter";
import HelloPinia from "../modules/HelloPinia.vue";
const counter = useStoreCounter();
</script>

<style lang="scss" scoped></style>
