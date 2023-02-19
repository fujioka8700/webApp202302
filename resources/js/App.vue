<script setup>
const isActive = true;
</script>

<template>
  <h1>Vue 3 入門</h1>
  <p class="underLine" :class="{ active: isActive }">v-bindの設定方法の確認</p>
</template>

<style>
.active {
  color: red;
}

.underLine {
  text-decoration: underline;
}
</style>
