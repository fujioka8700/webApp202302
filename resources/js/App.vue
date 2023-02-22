<script setup>
const user = {
  id: 1,
  name: "John Doe",
  email: "john@test.com",
  admin: true,
};
</script>

<template>
  <h1>オブジェクトのリスト化2</h1>
  <ul>
    <li v-for="(value, name) in user" :key="value">{{ name }}:{{ value }}</li>
  </ul>
</template>
