<template>
  <div>
    <h2>HomeView</h2>
    <p>Count: {{ count }}</p>
    <p>DoubleCount: {{ doubleCount }}</p>
    <div>
      <button @click="increment">Up</button>
    </div>
    <div>
      <button @click="counter.$reset">Reset</button>
    </div>
    <HelloPinia />
  </div>
</template>

<script setup>
import { useStoreCounter } from "../../store/counter";
import HelloPinia from "../modules/HelloPinia.vue";
import { storeToRefs } from "pinia";

const counter = useStoreCounter();
const { count, doubleCount } = storeToRefs(counter);
const { increment } = useStoreCounter();
</script>

<style lang="scss" scoped></style>
