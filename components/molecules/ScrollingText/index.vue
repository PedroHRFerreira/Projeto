<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MoleculesScrollingText",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<template>
  <div class="about-content__rotation-text">
    <div class="scrolling-text">
      <AtomsParagraphTitle
        v-for="(item, index) in items"
        :key="index"
        class="text"
        size="extra-small"
        :text="item"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "styles.module.scss";
</style>
