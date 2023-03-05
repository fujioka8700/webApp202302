<template>
  <div>
    <h2>AboutView</h2>
    <p>名前: {{ user.name }}</p>
    <p>メールアドレス: {{ user.email }}</p>
    <button type="button" @click="logout">ログアウト</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const user = ref({ name: "", email: "" });

onMounted(() => {
  axios.get("/api/user").then((response) => {
    user.value = response.data;
  });
});

const logout = () => {
  axios
    .post("/api/logout")
    .then((response) => {
      console.log(response);
      router.push("/login");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<style lang="scss" scoped></style>
