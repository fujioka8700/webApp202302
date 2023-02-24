<template>
  <div class="app">
    <h1>useAttrs による属性の取得</h1>
    <Hello style="color: red" class="active" />
  </div>
</template>

<script setup>
import Hello from "./components/modules/Hello.vue";
</script>

<style lang="scss" scoped>
.app {
  background: honeydew;
}
</style>
