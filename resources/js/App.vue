<template>
  <div>
    <h1>eventオブジェクト</h1>
    <button @click="clickButton($event)">クリック</button>
  </div>
</template>

<script setup>
const clickButton = (event) => {
  console.log(event);
};
</script>

<style lang="scss" scoped></style>
