<script setup>
const isActive = "active";
const isBlack = "back";
</script>

<template>
  <h1>Vue 3 入門</h1>
  <p :class="[isActive, isBlack]">v-bindの設定方法の確認</p>
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
