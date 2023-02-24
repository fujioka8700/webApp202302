<template>
  <div class="app">
    <h1>Input 要素をコンポーネント化</h1>
    <Hello :name="name" @update:model-value="handleEvent" />
    <Input :model-value="name" @update:model-value="name = $event" />
  </div>
</template>

<script setup>
import Hello from "./components/modules/Hello.vue";
import Input from "./components/modules/Input.vue";
import { ref } from "vue";

const name = ref("John");

const handleEvent = (newName) => {
  name.value = newName;
};
</script>

<style lang="scss" scoped>
.app {
  background: honeydew;
}
</style>
