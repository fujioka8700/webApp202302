<template>
  <div class="m-hello">
    <h1>Hello コンポーネント</h1>
    <p>Hello {{ props.person.name }}</p>
    <button @click="changeName">Change Name</button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  person: Object,
});

const changeName = () => {
  props.person.name = "Ken";
};
</script>

<style lang="scss" scoped>
.m-hello {
  background: lemonchiffon;
}
</style>
