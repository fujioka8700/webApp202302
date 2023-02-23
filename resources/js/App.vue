<template>
  <div>
    <h1>キー修飾子</h1>
    <input type="text" @keyup.enter="inputText" />
  </div>
</template>

<script setup>
const inputText = (event) => {
  console.log(event.target.value);
};
</script>

<style lang="scss" scoped></style>
