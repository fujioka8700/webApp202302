<template>
  <div>
    <h1>Vue3 コンポーネントの学習</h1>
    <Hello :isAdmin="false" />
  </div>
</template>

<script setup>
import Hello from "./components/modules/Hello.vue";
</script>

<style lang="scss" scoped></style>
