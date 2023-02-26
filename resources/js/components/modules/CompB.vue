<template>
  <div>
    <h3>CompBコンポーネント</h3>
    <p>{{ message }}</p>
    <p>{{ message2 }}</p>
  </div>
</template>

<script setup>
import { inject } from "vue";

const { message } = defineProps(["message"]);
const message2 = inject("message");
</script>

<style lang="scss" scoped></style>
