<template>
  <div>
    <h2>User 詳細</h2>
    <RouterLink to="/users">戻る</RouterLink>
    <ul>
      <li>User Id: {{ user.id }}</li>
      <li>User Name: {{ user.name }}</li>
      <li>User Email: {{ user.email }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const user = ref([]);

let id = parseInt(route.params.userId);

const fetchUser = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();
  user.value = data;
};

onMounted(() => {
  fetchUser();
});

watch(route, () => {
  id = parseInt(route.params.userId);
  fetchUser();
});
</script>

<style lang="scss" scoped></style>
