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
    <div>
      <component v-bind:is="tab"></component>
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

const tab = computed(() => tabs[city.value]);
</script>

<style lang="scss" scoped>
.app {
  background: #f0fff0;
}
</style>
