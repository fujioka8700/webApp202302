<template>
  <div>
    <h1>computed ディレクティブ</h1>
    <div v-for="user in adminUsers" :key="user.id">
      <p>{{ user.id }} {{ user.name }} {{ user.email }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const users = [
  { id: 1, name: "John Doe", email: "john@test.com", admin: true },
  { id: 2, name: "Jane Doe", email: "jane@example.com", admin: false },
  { id: 3, name: "Kevin MacDonald", email: "kevin@test.com", admin: false },
];

const adminUsers = computed(() => {
  return users.filter((user) => {
    return user.admin === true;
  });
});
</script>

<style lang="scss" scoped></style>
