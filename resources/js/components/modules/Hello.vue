<template>
  <div class="m-hello">
    <h2 class="info" :class="attrs.class" :style="attrs.style">
      Hello コンポーネント
    </h2>
  </div>
</template>

<script>
export default {
  // inheritAttrs: false,
};
</script>

<script setup>
import { useAttrs } from "vue";

const attrs = useAttrs();
</script>

<style lang="scss" scoped>
.m-hello {
  background: lemonchiffon;
}

.active {
  background: yellow;
}
</style>
