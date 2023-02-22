<script setup>
const user = {
  id: 1,
  name: "John Doe",
  email: "john@test.com",
  admin: true,
};
</script>

<template>
  <h1>オブジェクトのリスト化</h1>
  <ul>
    <li v-for="value in user" :key="value">{{ value }}</li>
  </ul>
</template>
