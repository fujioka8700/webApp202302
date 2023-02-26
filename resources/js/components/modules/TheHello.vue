<template>
  <!-- <div class="m-hello"> -->
  <h2>Hello コンポーネント</h2>
  <button @click="sendNotification">通知</button>
  <!-- </div> -->
</template>

<script setup>
const emit = defineEmits(["isNotification"]);

const sendNotification = () => {
  emit("isNotification");
};
</script>

<style lang="scss" scoped>
.m-hello {
  background: #fff0f5;
}
</style>
