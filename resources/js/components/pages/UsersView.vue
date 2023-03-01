<template>
  <div>
    <h2>Users 一覧</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        <RouterLink :to="`/users/${user.id}`">{{ user.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const users = ref([]);

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  users.value = data;
};

onMounted(() => {
  fetchUsers();
});
</script>

<style lang="scss" scoped></style>
