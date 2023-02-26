<template>
  <div class="m-hello">
    <h2>初めてのコンポーネント</h2>
    <p v-if="message">{{ message }}</p>
    <p v-if="name">{{ name }}</p>
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

const { message, name } = defineProps(["message", "name"]);

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
