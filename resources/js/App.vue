<script setup>
const activeColor = "red";
const fontSize = "3em";
</script>

<template>
  <h1>Vue 3 入門</h1>
  <p :style="{ color: activeColor, fontSize: fontSize }">
    v-bindの設定方法の確認
  </p>
</template>
