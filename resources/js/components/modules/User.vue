<template>
  <div class="m-user">
    <slot name="header" message="ヘッダー"></slot>
    <slot message="ユーザ" content="コンテンツ"></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.m-user {
  background: #f0f8ff;
}
</style>
