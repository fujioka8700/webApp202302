<script setup>
const message = "<h2>Hello World</h2>";
</script>

<template>
  <h1>Vue 3 入門</h1>
  <p>{{ message }}</p>
  <p v-text="message"></p>
  <div v-html="message"></div>
</template>
