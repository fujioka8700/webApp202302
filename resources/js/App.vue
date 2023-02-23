<template>
  <div>
    <h1>Computed</h1>
    <h2>fullName: {{ fullName }}</h2>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
const user = reactive({
  firstName: "John",
  lastName: "Doe",
});

const fullName = computed(() => `${user.firstName} ${user.lastName}`);
</script>

<style lang="scss" scoped></style>
