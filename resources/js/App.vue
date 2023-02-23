<template>
  <div>
    <h1>Computed vs Function</h1>
    <h2>fullName: {{ fullName() }}</h2>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const user = reactive({
  firstName: "John",
  lastName: "Doe",
});

const fullName = () => {
  return `${user.firstName} ${user.lastName}`;
};
</script>

<style lang="scss" scoped></style>
