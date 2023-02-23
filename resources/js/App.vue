<template>
  <div>
    <h1>watchEffect</h1>
    <button @click="count1++">Count1:{{ count1 }}</button>
    <button @click="count2++">Count2:{{ count2 }}</button>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
const count1 = ref(0);
const count2 = ref(100);

watchEffect(() => console.log(count1.value));
</script>

<style lang="scss" scoped></style>
