<template>
  <div>
    <h2>ユーザー</h2>
    <button @click="$router.push({ name: 'home' })">Homeへ戻る</button>
  </div>
</template>

<script setup>
const props = defineProps({
  userId: String,
});
</script>

<style lang="scss" scoped></style>
