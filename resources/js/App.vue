<template>
  <div class="app">
    <h1>Slot 複数のSlotsの設定</h1>
    <User>
      <template v-slot:title>服部伝説</template>
      <template v-slot:content>
        <div>
          <p>
            <span style="font-weight: 900">服部秀幸</span>がひたすら戦います。
          </p>
          <p>悪を退治して、お姫様を助けます。</p>
        </div>
      </template>
      <template v-slot:actions>Aボタン:武器で攻撃</template>
    </User>
  </div>
</template>

<script setup>
import User from "./components/modules/User.vue";
</script>

<style lang="scss" scoped>
.app {
  background: honeydew;
}
</style>
