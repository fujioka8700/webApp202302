<script setup>
const error = "エラー発生";
</script>

<template>
  <h1>Vue 3 入門</h1>
  <div v-if="error">{{ error }}</div>
</template>
