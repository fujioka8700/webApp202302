<template>
  <div>
    <h1>clickイベント</h1>
    <button v-on:click="clickButton('クリック'), another('click')">
      クリック
    </button>
  </div>
</template>

<script setup>
const clickButton = (msg) => {
  console.log(msg);
};
const another = (msg) => {
  console.log(msg);
};
</script>

<style lang="scss" scoped></style>
