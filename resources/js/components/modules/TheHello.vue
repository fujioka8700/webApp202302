<template>
  <div class="m-hello">
    <h2>Hello コンポーネント</h2>
    <p>{{ name }}</p>
  </div>
</template>

<script setup>
const { name } = defineProps(["name"]);
</script>

<style lang="scss" scoped>
.m-hello {
  background: #fff0f5;
}
</style>
