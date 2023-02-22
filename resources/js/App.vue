<template>
  <div>
    <h1>clickイベント</h1>
    <button v-on:click="clickButton">クリック</button>
  </div>
</template>

<script setup>
const clickButton = () => {
  console.log("val");
};
</script>

<style lang="scss" scoped></style>
