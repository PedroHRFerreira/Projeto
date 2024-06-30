<script lang="ts">
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "MoleculesSkills",
  emits: ["onClick"],
  setup() {
    const items = computed(() => {
      return [
        {
          icon: "photo",
          color: "#fff",
        },
        {
          icon: "photo",
          color: "#fff",
        },
        {
          icon: "photo",
          color: "#fff",
        },
        {
          icon: "photo",
          color: "#fff",
        },
        {
          icon: "photo",
          color: "#fff",
        },
        {
          icon: "photo",
          color: "#fff",
        },
        {
          icon: "photo",
          color: "#fff",
        },
        {
          icon: "photo",
          color: "#fff",
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
  <article class="skills-content">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="skills-content__main"
      @click="$emit('onClick')"
    >
      <AtomsIconSVG
        class="icon"
        :name="item.icon"
        :current-color="item.color"
        width="32px"
        filled
      />
    </div>
  </article>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
