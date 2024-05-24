<script lang="ts">
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "MoleculesIconProfile",
  setup() {
    const items = computed(() => {
      return [
        {
          icon: "github-fill-svgrepo-com",
          text: "Github",
        },
        {
          icon: "github-fill-svgrepo-com",
          text: "Github",
        },
        {
          icon: "github-fill-svgrepo-com",
          text: "Github",
        },
      ];
    });

    return {
      items,
    };
  },
});
</script>
<template>
  <article class="section">
    <div v-for="(item, index) in items" :key="index" class="icon-text">
      <AtomsIconSVG :name="item.icon" width="34px" height="34px" />
      <div>
        <AtomsParagraphTitle :text="item.text" size="extra-small" />
      </div>
    </div>
  </article>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
