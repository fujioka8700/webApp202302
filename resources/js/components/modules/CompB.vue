<template>
  <div class="m-classb">
    <h3>CompB コンポーネント</h3>
    <p>Count:{{ count }}</p>
    <button @click="addCount">+</button>
  </div>
</template>

<script setup>
import { inject } from "vue";

const count = inject("count");
const addCount = inject("addCount");
</script>

<style lang="scss" scoped>
.m-classb {
  background: #ffffe0;
}
</style>
