<template>
  <div>
    <header>
      <nav>
        <RouterLink :to="{ name: 'home' }">Home</RouterLink>
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
