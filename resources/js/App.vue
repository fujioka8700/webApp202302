<template>
  <div class="app">
    <h1>$emit によるイベント発生と検知</h1>
    <Hello @notification="handleEvent" />
  </div>
</template>

<script setup>
import Hello from "./components/modules/Hello.vue";

const handleEvent = () => {
  console.log("子コンポーネントからの通知");
};
</script>

<style lang="scss" scoped>
.app {
  background: honeydew;
}
</style>
