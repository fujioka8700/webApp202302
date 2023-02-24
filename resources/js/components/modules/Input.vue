<template>
  <div>
    <input
      type="text"
      :value="props.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  modelValue: String,
});
</script>

<style lang="scss" scoped></style>
