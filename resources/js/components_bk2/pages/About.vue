<template>
  <div class="p-about">
    <h2>About</h2>
  </div>
</template>

<script setup>
import { onBeforeRouteLeave } from "vue-router";
onBeforeRouteLeave(() => {
  const answer = window.confirm("ページを移動しますか？");

  if (!answer) return false;
});
</script>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .p-about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
