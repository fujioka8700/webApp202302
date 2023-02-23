<template>
  <div>
    <h1>$refの利用</h1>
    <button @click="addCount">count is:{{ count }}</button>
  </div>
</template>

<script setup>
let count = $ref(0);

const addCount = () => {
  count++;
};
</script>

<style lang="scss" scoped></style>
