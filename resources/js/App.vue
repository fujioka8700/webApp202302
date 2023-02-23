<template>
  <div>
    <h1>イベント</h1>
    <button @click="clickButton('投げれるよ。')">クリック</button>
  </div>
</template>

<script setup>
const clickButton = (msg) => {
  console.log(`クリックされました。${msg}`);
};
</script>

<style lang="scss" scoped></style>
