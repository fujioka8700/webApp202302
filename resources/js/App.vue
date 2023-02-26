<template>
  <div>
    <h1>Provide / Inject Reactiveな変数を渡す</h1>
    <CompA message="propsでデータ渡し" />
    <input type="text" v-model="message" />
  </div>
</template>

<script setup>
import CompA from "./components/modules/CompA.vue";
import { ref, provide } from "vue";

const message = ref("Provide/Injectでデータ渡し");

provide("message", message);
</script>

<style lang="scss" scoped></style>
