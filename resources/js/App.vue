<template>
  <div class="app">
    <h1>class 属性の設定を渡したい場合</h1>
    <Hello class="active" />
  </div>
</template>

<script setup>
import Hello from "./components/modules/Hello.vue";
import { ref } from "vue";

const person = ref({
  name: "John",
});
</script>

<style lang="scss" scoped>
.app {
  background: honeydew;
}
</style>
