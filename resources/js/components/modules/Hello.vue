<template>
  <div>
    <h1>子コンポーネント</h1>
    <p>Hello {{ props.name }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  name: String,
});
</script>

<style lang="scss" scoped></style>
