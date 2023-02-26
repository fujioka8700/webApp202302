<template>
  <div class="m-input">
    <h3>Input コンポーネント</h3>
    <input
      type="text"
      :value="props.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: String,
});
</script>

<style lang="scss" scoped>
.m-input {
  background: #ffffe0;
}
</style>
