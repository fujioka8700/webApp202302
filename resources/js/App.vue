<script setup>
const error = "Error 404";
</script>

<template>
  <h1>Vue 3 入門</h1>
  <div v-if="error">{{ error }}</div>
  <div v-else>エラーはありません。</div>
</template>
