<template>
  <div>
    <h2>NotFound</h2>
    <p>アクセスしたページは存在しません</p>
    <button @click="$router.push({ name: 'home' })">Homeへ戻る</button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
