<template>
  <div class="m-hello">
    <h2 class="info">Hello コンポーネント</h2>
    <p :class="$attrs.class">class 属性の渡し方確認中</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({});
</script>

<style lang="scss" scoped>
.m-hello {
  background: lemonchiffon;
}
</style>
