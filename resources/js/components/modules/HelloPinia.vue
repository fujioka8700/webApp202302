<template>
  <div class="m-hello-pinia">
    <h3>Hello Pinia</h3>
    <p>カウント:{{ counter.count }}</p>
    <p>ユーザー:{{ counter.user.name }}</p>
    <button @click="counter.$reset">リセット</button>
    <button @click="patch">Patch</button>
  </div>
</template>

<script setup>
import { useStoreCounter } from "../../store/counter";
const counter = useStoreCounter();

const patch = () => {
  counter.$patch((state) => {
    state.count = 10;
    state.user.name = "Kevin Doe";
  });
};
</script>

<style lang="scss" scoped>
.m-hello-pinia {
  background: #f0ffff;
}
</style>
