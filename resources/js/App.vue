<template>
  <div class="app">
    <h1>少し複雑なScoped Slot設定</h1>
    <ul>
      <User>
        <template v-slot="{ user }">
          <li>{{ user.name }}</li>
        </template>
      </User>
    </ul>
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
