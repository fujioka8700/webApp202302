<template>
  <div class="m-hello">
    <h3>Hello コンポーネント</h3>
    <p>Hello {{ name }}</p>
    <input type="text" v-model="name" @input="changeName" id="" />
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  name: String,
});

const emit = defineEmits({
  changeNameEvent: (name) => {
    if (name) {
      return true;
    } else {
      console.log("文字列が空です。");
      return false;
    }
  },
});

const name = ref(props.name);

const changeName = () => {
  emit("changeNameEvent", name.value);
};
</script>

<style lang="scss" scoped>
.m-hello {
  background: #fff0f5;
}
</style>
