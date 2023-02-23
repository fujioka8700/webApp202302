<template>
  <div>
    <h1>オブジェクトのリスト化</h1>
    <ul>
      <li v-for="value in user" :key="value">{{ value }}</li>
    </ul>
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
          <td v-for="value in user" :key="value">
            <div v-if="value === true">★</div>
            <div v-else-if="value">{{ value }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const user = {
  id: 1,
  name: "John Doe",
  email: "john@test.com",
  admin: true,
};

const users = [
  { id: 1, name: "John Doe", email: "john@test.com", admin: true },
  { id: 2, name: "Jane Doe", email: "jane@example.com", admin: false },
  { id: 3, name: "Kevin MacDonald", email: "kevin@test.com", admin: false },
];
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
  text-align: center;
}
th {
  color: #ff9800;
  background: #fff5e5;
}

table th,
table td {
  border: solid 1px black;
}
</style>
