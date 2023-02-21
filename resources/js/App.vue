<script setup>
const stock = 0;
</script>

<template>
  <h1>Vue 3 入門</h1>
  <div>商品数:{{ stock }}</div>
  <div v-if="stock > 5">まだ商品の在庫数に余裕があります。</div>
  <div v-else-if="stock === 0">申し訳ございません。現在売り切れです。</div>
  <div v-else>在庫数が少なくなってきます。お急ぎください。</div>
</template>
