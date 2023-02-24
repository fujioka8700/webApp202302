<template>
  <div class="m-hello">
    <h2>Hello コンポーネント</h2>
    <p>Hello {{ props.name }}</p>
    <button @click="changeName">Change Name</button>
    <input type="text" v-model="name" @input="changeName" />
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  name: String,
});

const name = ref(props.name);

const emit = defineEmits({
  changeNameEvent: (name) => {
    if (name) return true;
    return false;
  },
});

const changeName = () => {
  emit("changeNameEvent", name.value);
};
</script>

<style lang="scss" scoped>
.m-hello {
  background: lemonchiffon;
}
</style>
