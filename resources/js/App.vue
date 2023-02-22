<template>
  <div>
    <h1>clickイベント</h1>
    <button @click="clickButton">クリック</button>
    <div class="square" @click="clickButton('クリックされました')"></div>
  </div>
</template>

<script setup>
const clickButton = (msg) => {
  console.log(msg);
};
</script>

<style lang="scss" scoped>
.square {
  width: 100px;
  height: 100px;
  background-color: #39a9d6;
}
</style>
