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
  <input type="text" v-model="user.firstName" />
</template>

<script setup>
import { reactive, computed } from "vue";
const user = reactive({
  firstName: "John",
  lastName: "Doe",
});

const fullName = () => {
  console.log("Function");
  return `${user.firstName} ${user.lastName}`;
};

const cFullName = computed(() => {
  console.log("Computed Propety");
  return `${user.firstName} ${user.lastName}`;
});
</script>

<style lang="scss" scoped></style>
