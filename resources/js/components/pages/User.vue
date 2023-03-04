<template>
  <div>
    <h2>ユーザー詳細</h2>
    <button @click="$router.push({ name: 'users' })">戻る</button>
    <button @click="$router.back()">戻る</button>
    <button @click="$router.go(-1)">戻る</button>
    <button @click="$router.go(1)">進む</button>
    <ul>
      <li>User Id : {{ user.id }}</li>
      <li>User Name : {{ user.name }}</li>
      <li>User Email : {{ user.email }}</li>
    </ul>
    <RouterView />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { OK } from "../../util";

const props = defineProps({
  userId: String,
  first_name: String,
  last_name: String,
});
const route = useRoute();
const router = useRouter();
const user = ref([]);
let id = parseInt(props.userId);

const withUser = (response) => {
  if (response.status !== OK) {
    router.push({ path: "/notfound" });
  }
};

const fetchUser = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  withUser(response);

  const data = await response.json();
  user.value = data;
};

onMounted(() => {
  fetchUser();
});

watch(route, () => {
  id = parseInt(props.userId);
  fetchUser();
});
</script>

<style lang="scss" scoped></style>
