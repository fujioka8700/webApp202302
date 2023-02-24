<template>
  <div class="m-hello">
    <h2>Hello コンポーネント</h2>
    <button @click="sendNotification">通知</button>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
const emit = defineEmits(["notification"]);

const sendNotification = () => {
  emit("notification");
};
</script>

<style lang="scss" scoped>
.m-hello {
  background: lemonchiffon;
}
</style>
