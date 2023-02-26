<template>
  <div class="m-thecompb">
    <h3>CompB</h3>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { inject } from "vue";

const message = inject("message");
</script>

<style lang="scss" scoped>
.m-thecompb {
  background: #dcdcdc;
}
</style>
