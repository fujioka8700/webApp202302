<template>
  <div class="m-hello-pinia">
    <h3>Hello Pinia</h3>
    <p>カウント:{{ counter.count }}</p>
    <button @click="counter.$reset">リセット</button>
    <button @click="patch">Patch</button>
  </div>
</template>

<script setup>
import { useStoreCounter } from "../../store/counter";
const counter = useStoreCounter();

const patch = () => {
  counter.$patch({
    count: 100,
    user: {
      name: "Jane Doe",
    },
  });
};
</script>

<style lang="scss" scoped>
.m-hello-pinia {
  background: #f0ffff;
}
</style>
