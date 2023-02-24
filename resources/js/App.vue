<template>
  <div>
    <h1>Vue3 初めてのコンポーネント</h1>
    <Hello message="Propsの使い方" name="John" />
    <Hello message="definePropsの使い方" />
    <Hello />
  </div>
</template>

<script setup>
import Hello from "./components/modules/Hello.vue";
</script>

<style lang="scss" scoped></style>
