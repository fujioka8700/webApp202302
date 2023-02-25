<template>
  <div class="app">
    <h1>Slot 初期値の設定</h1>
    <User><span style="color: red; font-size: 2em">Jane Doe</span></User>
  </div>
</template>

<script setup>
import User from "./components/modules/User.vue";
</script>

<style lang="scss" scoped>
.app {
  background: honeydew;
}
</style>
