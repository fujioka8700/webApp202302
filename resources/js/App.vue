<script setup>
const error = false;
</script>

<template>
  <h1>Vue 3 入門</h1>
  <div v-if="error">エラーが発生しています。</div>
  <div v-show="error">エラーが発生しています。</div>
</template>
