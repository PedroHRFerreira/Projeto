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
  <div class="main-card">
    <aside v-for="(item, index) in items" :key="index" class="main-card__cards">
      <article class="main-card__animation">
        <img
          :src="item.imageInteractive"
          alt="Imagens interativas"
          width="100%"
          height="100%"
        />
      </article>
      <div class="main-card__fixed">
        <AtomsParagraphTitle
          class="text"
          size="small"
          :text="item.text"
          types="primary"
        />
      </div>
      <div class="main-card__presentation">
        <img :src="item.imageFixed" alt="tes" width="100%" height="100%" />
      </div>
    </aside>
  </div>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
