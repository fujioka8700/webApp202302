<template>
  <div class="app">
    <h1>Scoped Slotの設定</h1>
    <User>
      <template v-slot:default="slotProps">{{ slotProps }}</template>
    </User>
  </div>
</template>

<script setup>
import User from "./components/modules/User.vue";
</script>

<style lang="scss" scoped>
.app {
  background: #f0fff0;
}
</style>
