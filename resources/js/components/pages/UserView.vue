<template>
  <div>
    <h2>User 詳細</h2>
    <button @click="$router.push({ path: '/users' })">戻る</button>
    <ul>
      <li>User Id: {{ user.id }}</li>
      <li>User Name: {{ user.name }}</li>
      <li>User Email: {{ user.email }}</li>
    </ul>
    <RouterView />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  userId: String,
  first_name: String,
  last_name: String,
});

const route = useRoute();
const user = ref([]);

let id = parseInt(props.userId);

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
