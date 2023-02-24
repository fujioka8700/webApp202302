<template>
  <div>
    <h2>初めてのコンポーネント</h2>
    <p>{{ message }}</p>
    <p>{{ name }}</p>
    <p>Ref Count: {{ count }}</p>
    <p>Reactive Count: {{ state.count }}</p>
    <div>
      <button @click="addRefCount">Ref Count+</button>
      <button @click="addReactiveCount">Reactive Count+</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, defineProps } from "vue";
const count = ref(0);
const state = reactive({
  count: 1,
});

const { name, message } = defineProps({
  message: String,
  name: String,
});

const addRefCount = () => {
  count.value++;
};

const addReactiveCount = () => {
  state.count++;
};
</script>

<style lang="scss" scoped></style>
