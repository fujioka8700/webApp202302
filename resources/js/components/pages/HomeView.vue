<template>
  <div>
    <h2>ユーザー一覧</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        UserName:{{ user.name }} Email: {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const users = ref([]);

const getUsers = () => {
  axios.get("/api/users").then((res) => {
    users.value = res.data;
  });
};
getUsers();
</script>

<style lang="scss" scoped></style>
