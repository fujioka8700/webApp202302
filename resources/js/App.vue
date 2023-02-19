<script setup>
const isActive = false;
const isBlack = true;
</script>

<template>
  <h1>Vue 3 入門</h1>
  <p :class="isActive ? 'active' : 'underLine'">v-bindの設定方法の確認</p>
</template>

<style>
.active {
  color: red;
}

.underLine {
  text-decoration: underline;
}

.back {
  background-color: black;
}
</style>
