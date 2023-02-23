<template>
  <div>
    <h1>Computed プロパティ</h1>
    <h2>fullName: {{ user.firstName }} {{ user.lastName }}</h2>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const user = reactive({
  firstName: "John",
  lastName: "Doe",
});
</script>

<style lang="scss" scoped></style>
