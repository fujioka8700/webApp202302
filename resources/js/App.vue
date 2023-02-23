<template>
  <div>
    <h1>Computed セッター</h1>
    <h2>{{ fullName }}</h2>
    <button @click="changeName">Change Name</button>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
const user = reactive({
  firstName: "John",
  lastName: "Doe",
});

const fullName = computed({
  get() {
    return user.firstName + " " + user.lastName;
  },
  set(newValue) {
    const names = newValue.split(" ");
    user.firstName = names[0];
    user.lastName = names[names.length - 1];
  },
});

const changeName = () => {
  fullName.value = "Jane Doe";
};
</script>

<style lang="scss" scoped></style>
