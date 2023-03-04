<template>
  <div>
    <h2>ユーザー一覧</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        <RouterLink :to="{ name: 'user', params: { userId: user.id } }">
          {{ user.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const users = ref([]);

const getUsers = () => {
  axios.get("/api/users").then((res) => {
    users.value = res.data;
  });
};

onMounted(() => {
  getUsers();
});
</script>

<style lang="scss" scoped></style>
