<template>
  <div>
    <h1>reactive な変数を渡したい場合</h1>
    <Hello :name="name" />
  </div>
</template>

<script setup>
import Hello from "./components/modules/Hello.vue";
import { ref } from "vue";

const name = ref("John");
</script>

<style lang="scss" scoped></style>
