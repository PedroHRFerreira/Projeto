<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MoleculesImageSwitch",
  props: {
    srcImage: {
      type: String,
      default: "",
    },
  },
  setup() {},
});
</script>
<template>
  <article class="card-image--text">
    <AtomsImageDisplay :items-on="true" :src="srcImage"> </AtomsImageDisplay>
  </article>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
