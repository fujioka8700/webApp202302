<template>
  <div class="app">
    <h1>バリデーションの設定</h1>
    <p>{{ name }}</p>
    <Hello :name="name" @changeNameEvent="handleEvent" />
    <p>{{ name }}</p>
    <p>{{ address }}</p>
    <Input v-model="name" />
    <Input v-model="address" />
  </div>
</template>

<script setup>
import Input from "./components/modules/Input.vue";
import Hello from "./components/modules/Hello.vue";
import { ref } from "vue";

const name = ref("John");
const address = ref("");

const handleEvent = (newName) => {
  name.value = newName;
};
</script>

<style lang="scss" scoped>
.app {
  background: honeydew;
}
</style>
