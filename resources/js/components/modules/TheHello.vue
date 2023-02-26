<template>
  <!-- <div class="m-hello"> -->
  <h2 :style="attrs.style" class="info">Hello コンポーネント</h2>
  <p :class="attrs.class">くにおくんのライバルは、りきです。</p>
  <!-- </div> -->
</template>

<script setup>
import { useAttrs } from "vue";
const attrs = useAttrs();
console.log(attrs);
</script>

<style lang="scss" scoped>
.m-hello {
  background: #fff0f5;
}

.active {
  color: red;
}
</style>
