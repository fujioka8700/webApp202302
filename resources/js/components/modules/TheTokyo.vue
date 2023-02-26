<template>
  <div class="m-thetokyo">
    <h3>東京</h3>
    <p>日本の首都です。</p>
    <p>{{ count }}</p>
    <button @click="addCount">Add Count</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

const addCount = () => {
  count.value++;
};
</script>

<style lang="scss" scoped>
.m-thetokyo {
  background: #fdf5e6;
}
</style>
