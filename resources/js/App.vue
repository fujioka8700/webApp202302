<template>
  <div>
    <h1>eventオブジェクト</h1>
    <button @click="clickButton($event)">クリック</button>
  </div>
</template>

<script setup>
const clickButton = (event) => {
  event.target.style.backgroundColor = "red";
};
</script>

<style lang="scss" scoped></style>
