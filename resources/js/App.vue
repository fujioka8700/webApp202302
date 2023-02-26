<template>
  <div class="app">
    <h1>Dynamic コンポーネント</h1>
    <div>
      <button @click="city = 'tokyo'">東京</button>
      <button @click="city = 'kyoto'">京都</button>
    </div>
    <div>
      <component :is="tab"></component>
    </div>
  </div>
</template>

<script setup>
import Tokyo from "./components/modules/Tokyo.vue";
import Kyoto from "./components/modules/Kyoto.vue";
import { ref, computed } from "vue";

const city = ref("tokyo");

const tabs = {
  tokyo: "Tokyo",
  kyoto: "Kyoto",
};

const tab = computed(() => (city.value === "tokyo" ? Tokyo : Kyoto));
</script>

<style lang="scss" scoped>
.app {
  background: #f0fff0;
}
</style>
