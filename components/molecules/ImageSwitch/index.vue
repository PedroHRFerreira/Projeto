<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "MoleculesImageSwitch",
  props: {
    textSwitch: {
      type: String,
      default: "Lorem Ipsum:",
    },
    textImage: {
      type: String,
      default:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  },
  setup() {
    const isActive = ref(false);

    const handleSwitch = (state: boolean) => {
      isActive.value = state;
    };

    return {
      isActive,
      handleSwitch,
    };
  },
});
</script>
<template>
  <article class="card-image--text">
    <AtomsImageDisplay :items-on="true">
      <div class="card-image--text__content">
        <AtomsParagraphTitle :text="textSwitch" />
        <AtomsSwitch class="switch" @onSwitch="handleSwitch" />
      </div>
      <AtomsParagraphTitle v-if="isActive" size="small" :text="textImage" />
    </AtomsImageDisplay>
  </article>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
