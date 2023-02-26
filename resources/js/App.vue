<template>
  <div>
    <h1>Provide / Inject</h1>
    <CompA message="propsでデータ渡し" />
  </div>
</template>

<script setup>
import CompA from "./components/modules/CompA.vue";
import { provide } from "vue";

provide("message", "Provide/Injectでデータ渡し");
</script>

<style lang="scss" scoped></style>
