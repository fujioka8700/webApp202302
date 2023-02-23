<template>
  <div>
    <h1>Computed 2</h1>
    <ul>
      <li v-for="user in adminUsers" :key="user.id">
        {{ user.id }} {{ user.name }} {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
const users = [
  { id: 1, name: "John Doe", email: "john@test.com", admin: true },
  { id: 2, name: "Jane Doe", email: "jane@example.com", admin: false },
  { id: 3, name: "Kevin MacDonald", email: "kevin@test.com", admin: false },
];

const adminUsers = computed(() => users.filter((user) => user.admin === true));
</script>

<style lang="scss" scoped></style>
