<template>
  <div>
    <h3>CompBコンポーネント</h3>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
const { message } = defineProps(["message"]);
</script>

<style lang="scss" scoped></style>
