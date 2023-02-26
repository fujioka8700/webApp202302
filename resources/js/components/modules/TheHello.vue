<template>
  <div class="m-hello">
    <h2>Hello コンポーネント</h2>
    <p>名前：{{ name }}</p>
    <button @click="sendNotification">通知</button>
  </div>
</template>

<script setup>
const { name } = defineProps({
  name: String,
});

const emit = defineEmits(["changeNameEvent"]);

const sendNotification = () => {
  emit("changeNameEvent", "いわかべ");
};
</script>

<style lang="scss" scoped>
.m-hello {
  background: #fff0f5;
}
</style>
