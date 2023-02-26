<template>
  <div class="m-hello">
    <h3>Hello コンポーネント</h3>
    <p>名前：{{ name }}</p>
    <button @click="sendNotification">通知</button>
    <input type="text" v-model="name" @input="changeName" />
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  name: String,
});

const name = ref(props.name);

const emit = defineEmits(["changeNameEvent"]);

const changeName = () => {
  emit("changeNameEvent", name.value);
};
</script>

<style lang="scss" scoped>
.m-hello {
  background: #fff0f5;
}
</style>
