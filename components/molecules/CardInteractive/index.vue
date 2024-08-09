<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MoleculesCardInteractive",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
});
</script>
<template>
  <aside v-for="(item, index) in items" :key="index" class="main-card">
    <article class="main-card__animation"></article>
    <div class="main-card__fixed">
      <AtomsParagraphTitle
        class="text"
        size="small"
        :text="item.text"
        types="primary"
      />
    </div>
    <div class="main-card__presentation"></div>
  </aside>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
