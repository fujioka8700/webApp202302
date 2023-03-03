<template>
  <div>
    <h2>ユーザー詳細</h2>
    <p>{{ $route.params.id }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style lang="scss" scoped></style>
