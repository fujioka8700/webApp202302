<template>
  <div>
    <h1>watchEffect</h1>
    <button @click="count++">Count:{{ count }}</button>
    <button @click="count2++">Count2:{{ count2 }}</button>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";

const count = ref(0);
const count2 = ref(100);

watchEffect(() => {
  console.log(parseInt(count.value, 10) / parseInt(count2.value, 10));
});
</script>

<style lang="scss" scoped></style>
