<template>
  <div>
    <h1>Boolean を渡したい場合</h1>
    <p v-if="props.isAdmin">管理者です</p>
    <p v-else>管理者ではありません</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  isAdmin: Boolean,
});
</script>

<style lang="scss" scoped></style>
