<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MoleculesSummary",
});
</script>
<template>
  <details class="summary">
    <summary class="summary__doubt" style="color: aqua">Details</summary>
    <AtomsParagraphTitle
      class="text"
      size="extra-small"
      types="primary"
      text="item.text"
    />
  </details>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
