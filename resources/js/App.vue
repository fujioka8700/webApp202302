<template>
  <div class="app">
    <h1>reactive な変数を渡したい場合</h1>
    <Hello :person="person" />
    <button @click="changeName">Change Name</button>
  </div>
</template>

<script setup>
import Hello from "./components/modules/Hello.vue";
import { ref } from "vue";

const person = ref({
  name: "John",
});

// 子コンポーネントで親コンポーネントで定義した
// reactiveな変数を更新したい場合にはemitイベントを利用します。
const changeName = () => {
  person.name.value = "Raou";
};
</script>

<style lang="scss" scoped>
.app {
  background: honeydew;
}
</style>
