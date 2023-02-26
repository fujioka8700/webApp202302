<template>
  <div class="m-hello">
    <h2>初めてのコンポーネント</h2>
    <p>Count:{{ count }}</p>
    <p>Reactive Count: {{ state.count }}</p>
    <div>
      <button @click="addRefCount">Ref Count++</button>
      <button @click="addReactiveCount">Reactive Count++</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const count = ref(0);
const state = reactive({
  count: 1,
});

const addRefCount = () => {
  count.value++;
};

const addReactiveCount = () => {
  state.count++;
};
</script>

<style lang="scss" scoped>
.m-hello {
  background: #fff0f5;
}
</style>
