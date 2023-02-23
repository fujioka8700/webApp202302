<template>
  <div>
    <h1>キー修飾子</h1>
    <input @keyup.enter="inputText" type="text" value="入力された文字" />
  </div>
</template>

<script setup>
const inputText = (event) => {
  console.log(event.target.value);
};
</script>

<style lang="scss" scoped></style>
