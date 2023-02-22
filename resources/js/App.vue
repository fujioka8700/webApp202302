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
  <h1>オブジェクトの値をリスト化</h1>
  <ul>
    <li v-for="user in users" :key="user.id">
      <div v-for="(value, name) in user">{{ name }}:{{ value }}</div>
    </li>
  </ul>
</template>
