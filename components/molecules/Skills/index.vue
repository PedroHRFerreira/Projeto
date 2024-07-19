<script lang="ts">
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
  name: "MoleculesSkills",
  emits: ["onClick"],
  setup() {
    const visible = ref(false);

    const show = () => {
      visible.value = !visible.value;
    };

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
      visible,
      items,
      show,
    };
  },
});
</script>
<template>
  <AtomsParagraphTitle
    style="cursor: pointer"
    text="Skills"
    size="small"
    @click="show"
  />
  <article v-if="visible" class="skills-content">
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
