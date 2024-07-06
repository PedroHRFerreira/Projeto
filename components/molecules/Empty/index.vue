<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MoleculesEmpty",
  setup() {},
});
</script>

<template>
  <article class="animation-main">
    <AtomsParagraphTitle size="small" text="Aguarde a Página!!!" />
    <div class="loading-screen">
      <div class="animal animal1"></div>
      <div class="animal animal2"></div>
      <div class="animal animal3"></div>
      <div class="animal animal4"></div>
      <div class="animal animal5"></div>
      <div class="animal animal6"></div>
    </div>
  </article>
</template>

<style scoped lang="scss">
@import "styles.module.scss";
</style>
