<template>
  <div class="m-hello">
    <h3>Hello コンポーネント</h3>
    <p>名前：{{ props.name }}</p>
    <input type="text" v-model="name" @input="changeName" />
    <p>{{ name }}</p>
    <TheInput :model-value="name" @update:model-value="name = $event" />
  </div>
</template>

<script setup>
import TheInput from "./TheInput.vue";
import { ref } from "vue";
const props = defineProps({
  name: String,
});

const name = ref(props.name);

const emit = defineEmits(["changeNameEvent"]);

const changeName = () => {
  emit("changeNameEvent", name.value);
};
</script>

<style lang="scss" scoped>
.m-hello {
  background: #fff0f5;
}
</style>
