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
    <div class="loader">
      <div class="loader-dot"></div>
      <div class="loader-dot"></div>
      <div class="loader-dot"></div>
      <div class="loader-dot"></div>
    </div>
  </article>
</template>

<style scoped lang="scss">
@import "styles.module.scss";
</style>
