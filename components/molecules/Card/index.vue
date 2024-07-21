<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MoleculesCard",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const hoveredStates = ref(props.items.map(() => false));

    const handleMouseEnter = (index: number) => {
      hoveredStates.value[index] = true;
    };

    const handleMouseLeave = (index: number) => {
      hoveredStates.value[index] = false;
    };

    return {
      hoveredStates,
      handleMouseEnter,
      handleMouseLeave,
    };
  },
});
</script>

<template>
  <article class="card-main">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="card-main__cards"
      @mouseenter="handleMouseEnter(index)"
      @mouseleave="handleMouseLeave(index)"
      :class="{ hovered: hoveredStates[index] }"
    >
      <NuxtLink :to="item.url">
        <section class="card-main__cards__content">
          <div class="icon-animation" :class="{ icon: hoveredStates[index] }">
            <AtomsIconSVG :name="item.icon" />
          </div>
          <AtomsParagraphTitle :text="item.title" size="small" class="title" />
          <AtomsParagraphTitle
            :text="item.text"
            size="extra-small"
            class="title"
          />
        </section>
      </NuxtLink>
    </div>
  </article>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
