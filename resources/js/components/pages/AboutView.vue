<template>
  <div class="p-aboutview">
    <h1>This is an about page</h1>
  </div>
</template>

<script setup>
import { onBeforeRouteLeave } from "vue-router";

onBeforeRouteLeave((to, from) => {
  const answer = window.confirm("ページを移動してよろしいですか？");

  if (!answer) return false;
});
</script>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .p-aboutview {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
