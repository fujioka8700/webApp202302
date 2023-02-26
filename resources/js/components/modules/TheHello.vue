<template>
  <div class="m-hello">
    <h2 class="info">Hello コンポーネント</h2>
    <p :class="$attrs.class">くにおくんのライバルは、りきです。</p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.m-hello {
  background: #fff0f5;
}
</style>
