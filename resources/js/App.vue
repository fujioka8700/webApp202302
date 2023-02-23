<template>
  <div>
    <h1>配列のリスト表示</h1>
    <ol>
      <li v-for="language in languages" :key="language">{{ language }}</li>
    </ol>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>名前</th>
          <th>email</th>
          <th>管理者</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td v-if="user.admin === true">★</td>
          <td v-else></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const languages = ["JavaScript", "TypeScript", "Vue.js"];
const users = [
  { id: 1, name: "John Doe", email: "john@test.com", admin: true },
  { id: 2, name: "Jane Doe", email: "jane@example.com", admin: false },
  { id: 3, name: "Kevin MacDonald", email: "kevin@test.com", admin: false },
];
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
}
table th,
table td {
  border: solid 1px black;
  /*実線 1px 黒*/
}
</style>
