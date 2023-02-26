<template>
  <div class="m-theuser">
    <p>
      くにおくんが在籍している学校:<slot
        name="school"
        message="くにおくん率いる高校です。"
        >熱血高校</slot
      >
    </p>
    <p>学ランの色:<slot name="uniformColor">白色</slot></p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.m-theuser {
  background: #f5f5dc;
}
</style>
