<script setup>
let message = "Hello World";

const upperCase = () => {
  message = message.toUpperCase();
};

upperCase();
</script>

<template>
  <h1>Vue 3 入門</h1>
  <div v-html="message"></div>
</template>
