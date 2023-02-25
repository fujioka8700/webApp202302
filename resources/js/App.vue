<template>
  <div class="app">
    <h1>Dynamic コンポーネント</h1>
    <div>
      <button @click="city = 'tokyo'">東京</button>
      <button @click="city = 'kyoto'">京都</button>
    </div>
    <div>
      <Tokyo v-if="city == 'tokyo'" />
      <Kyoto v-else />
    </div>
  </div>
</template>

<script setup>
import Tokyo from "./components/modules/Tokyo.vue";
import Kyoto from "./components/modules/Kyoto.vue";
import { ref } from "vue";

const city = ref("tokyo");
</script>

<style lang="scss" scoped>
.app {
  background: #f0fff0;
}
</style>
