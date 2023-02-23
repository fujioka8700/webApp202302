<template>
  <div>
    <h1>Vue3 入門</h1>
    <p class="underLine" :class="{ active: isActive }">{{ message }}</p>
    <p :style="{ color: activeColor }">
      {{ message.length > 10 ? "Long" : "Short" }}
    </p>
    <p :style="styleObject" v-text="message"></p>
    <p v-html="message2"></p>
    <a :href="link" target="_blank">JavaScriipt リファレンス</a>
    <div v-if="error">{{ error }}</div>
    <div v-else>異常なし</div>
    <div v-show="error">エラーが発生しました。</div>
  </div>
</template>

<script setup>
let message = "Hello World";
const message2 = "<h2>Hello World</h2>";
const link = "https://developer.mozilla.org/ja/";
const isActive = true;
const activeColor = "red";
const styleObject = {
  color: "blue",
  fontWeight: 900,
};

const error = "エラー発生";

const lowerCase = () => {
  message = message.toLowerCase();
};

lowerCase();
</script>

<style lang="scss" scoped>
.active {
  color: red;
  font-size: 2em;
}

.underLine {
  text-decoration: underline;
}
</style>
