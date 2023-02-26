<template>
  <div class="m-thecompb">
    <h3>CompB</h3>
    <p>{{ message }}</p>
    <p>{{ count }}</p>
    <button @click="addCount">Add Count</button>
  </div>
</template>

<script setup>
import { inject } from "vue";

const message = inject("message");
const count = inject("count");
const addCount = inject("addCount");
</script>

<style lang="scss" scoped>
.m-thecompb {
  background: #dcdcdc;
}
</style>
