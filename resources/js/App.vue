<template>
  <div>
    <h1>イベント修飾子</h1>
    <form @submit="send">
      <button>送信</button>
    </form>
  </div>
</template>

<script setup>
const send = () => {
  console.log("send");
};
</script>

<style lang="scss" scoped></style>
