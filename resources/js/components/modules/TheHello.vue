<template>
  <div class="m-hello">
    <h2>Hello コンポーネント</h2>
    <p>ユーザー名:{{ name }}</p>
    <p v-if="admin">管理者です。</p>
  </div>
</template>

<script setup>
const { name, admin } = defineProps({
  name: String,
  admin: Boolean,
});
</script>

<style lang="scss" scoped>
.m-hello {
  background: #fff0f5;
}
</style>
