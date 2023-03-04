<template>
  <div>
    <h2>ユーザー</h2>
    <button @click="$router.push({ name: 'home' })">Homeへ戻る</button>
    <ul>
      <li>{{ user.id }}</li>
      <li>{{ user.name }}</li>
      <li>{{ user.email }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  userId: String,
});
const user = ref({});

const getUser = () => {
  axios.get(`/api/users/${props.userId}`).then((res) => {
    user.value = res.data;
  });
};

onMounted(() => {
  getUser();
});
</script>

<style lang="scss" scoped></style>
