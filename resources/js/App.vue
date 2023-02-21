<script setup>
const users = [
  { id: 1, name: "John Doe", email: "john@test.com", admin: true },
  { id: 2, name: "Jane Doe", email: "jane@example.com", admin: false },
  { id: 3, name: "Kevin MacDonald", email: "kevin@foo.com", admin: false },
];
</script>

<template>
  <h1>Vue 3 入門</h1>
  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.id }}:{{ user.name }}({{ user.email }})
    </li>
  </ul>

  <ul>
    <li v-for="(user, index) in users" :key="user">
      {{ index }}-{{ user.id }}:{{ user.name }}({{ user.email }})
    </li>
  </ul>

  <table>
    <thead>
      <tr>
        <td>ID</td>
        <td>ユーザー名</td>
        <td>Email</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  border-collapse: collapse;
}
table th,
table td {
  border: solid 1px black;
}
</style>
