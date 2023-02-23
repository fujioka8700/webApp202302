<template>
  <div>
    <h1>Reactivity(反応性)</h1>
    <button @click="count++">count is:{{ count }}</button>
  </div>
</template>

<script setup>
const count = 0;
</script>

<style lang="scss" scoped></style>
