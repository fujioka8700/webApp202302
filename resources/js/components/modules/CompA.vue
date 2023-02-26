<template>
  <div class="m-classa">
    <h2>CompA コンポーネント</h2>
    <CompB :message="message" />
  </div>
</template>

<script setup>
import CompB from "./CompB.vue";

const { message } = defineProps(["message"]);
</script>

<style lang="scss" scoped>
.m-classa {
  background: #fdf5e6;
}
</style>
