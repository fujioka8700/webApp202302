<template>
  <div>
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/users/1">User1</RouterLink>
        <RouterLink to="/users/2">User2</RouterLink>
      </nav>
    </header>
    <RouterView :key="$route.params.userId" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.router-link-active {
  font-weight: bold;
}
</style>
