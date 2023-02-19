<script setup>
const link = "https://ja.vuejs.org/";
</script>

<template>
  <h1>Vue 3 入門</h1>
  <div v-html="link"></div>
  <div>
    <a v-bind:href="link">Vue公式</a>
  </div>
</template>
