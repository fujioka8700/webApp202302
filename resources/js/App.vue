<template>
  <div>
    <h1>Computed vs Function</h1>
    <h2>fullName: {{ fullName() }}</h2>
    <h2>fullName: {{ fullName() }}</h2>
    <h2>fullName: {{ fullName() }}</h2>
    <h2>fullName: {{ cFullName }}</h2>
    <h2>fullName: {{ cFullName }}</h2>
    <h2>fullName: {{ cFullName }}</h2>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
const user = reactive({
  firstName: "John",
  lastName: "Doe",
});

const fullName = () =>
  `${Math.floor(Math.random() * 100)} ${user.firstName} ${user.lastName}`;

const cFullName = computed(
  () => `${Math.floor(Math.random() * 100)} ${user.firstName} ${user.lastName}`
);
</script>

<style lang="scss" scoped></style>
