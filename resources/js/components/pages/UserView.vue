<template>
  <div>
    <h2>User 詳細</h2>
    <button @click="$router.push({ name: 'users' })">戻る</button>
    <ul>
      <li>User Id: {{ user.id }}</li>
      <li>User Name: {{ user.name }}</li>
      <li>User Email: {{ user.email }}</li>
    </ul>
    <RouterView />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { onBeforeRouteUpdate } from "vue-router";

const props = defineProps({
  userId: String,
  first_name: String,
  last_name: String,
});

const user = ref([]);

const fetchUser = async (userId) => {
  const id = parseInt(userId);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();
  user.value = data;
};

onMounted(() => {
  fetchUser(props.userId);
});

onBeforeRouteUpdate((to, from) => {
  fetchUser(to.params.userId);
});
</script>

<style lang="scss" scoped></style>
