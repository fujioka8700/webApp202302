<script setup>
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@test.com",
    admin: true,
  },
  {
    id: 2,
    name: "Nakamura Toru",
    email: "nakamura@toru.com",
    admin: false,
  },
  {
    id: 3,
    name: "Shimada Ryo",
    email: "shimada@ryo.com",
    admin: false,
  },
];
</script>

<template>
  <h1>リストと分岐</h1>
  <div v-for="user in users" :key="user.id">
    <div v-if="!user.admin">
      {{ user.name }}
    </div>
  </div>
</template>
