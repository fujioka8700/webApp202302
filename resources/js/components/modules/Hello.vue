<template>
  <div class="m-hello">
    <h2>Hello コンポーネント</h2>
    <p>Hello {{ props.name }}</p>
    <button @click="changeName">Change Name</button>
    <input
      type="text"
      :value="name"
      @input="$emit('changeNameEvent', $event.target.value)"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  name: String,
});
</script>

<style lang="scss" scoped>
.m-hello {
  background: lemonchiffon;
}
</style>
