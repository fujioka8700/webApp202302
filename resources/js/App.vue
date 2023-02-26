<template>
  <div class="app">
    <h1>Vue3 入門 Components 2周目</h1>
    <h2>少し複雑なScoped Slot設定</h2>
    <ul>
      <TheUser>
        <template v-slot:default="{ user }">
          <li>{{ user.name }}</li>
        </template>
      </TheUser>
    </ul>
  </div>
</template>

<script setup>
import TheUser from "./components/modules/TheUser.vue";
</script>

<style lang="scss" scoped>
.app {
  background: #f0f8ff;
}
</style>
