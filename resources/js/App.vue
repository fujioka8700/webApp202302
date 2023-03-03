<template>
  <div>
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/users">ユーザー一覧</RouterLink>
        <RouterLink to="/user/1">User1</RouterLink>
        <RouterLink to="/user/2">User2</RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.router-link-active {
  font-weight: bold;
}
</style>
