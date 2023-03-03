<template>
  <div>
    <header>
      <nav>
        <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        <RouterLink :to="{ name: 'about', query: { name: 'John' } }"
          >About</RouterLink
        >
        <RouterLink :to="{ name: 'user', params: { userId: 1 } }"
          >User1</RouterLink
        >
        <RouterLink :to="{ name: 'user', params: { userId: 2 } }"
          >User2</RouterLink
        >
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
