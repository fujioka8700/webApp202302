<template>
  <div>
    <h1>Props 数値を渡したいとき</h1>
    <p>{{ props.price + 100 }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  price: Number,
});
</script>

<style lang="scss" scoped></style>
