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
      <AtomsTag
        v-for="(item, index) in items"
        :key="index"
        :text="item"
        type="outline"
        class="text"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "styles.module.scss";
</style>
