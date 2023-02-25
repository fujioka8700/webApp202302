<template>
  <div class="m-user">
    <slot v-for="user in users" :user="user"></slot>
  </div>
</template>

<script setup>
import { ref } from "vue";

const users = ref([]);

const fetchPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  users.value = await res.json();
};

fetchPost();
</script>

<style lang="scss" scoped>
.m-user {
  background: #f0f8ff;
}
</style>
