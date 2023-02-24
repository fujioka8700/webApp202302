<template>
  <div class="m-hello">
    <h2>Hello コンポーネント</h2>
    <button @click="$emit('notification')">通知</button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.m-hello {
  background: lemonchiffon;
}
</style>
