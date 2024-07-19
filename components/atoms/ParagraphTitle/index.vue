<script lang="ts">
import { defineComponent } from "vue";

const SIZE_OPTIONS = ["extra-large", "large", "medium", "small", "extra-small"];
const TYPE_OPTIONS = ["default", "primary", "dark"];

export default defineComponent({
  name: "AtomsParagraphTitle",
  props: {
    size: {
      type: String,
      default: "large",
      validator: (value: string) => SIZE_OPTIONS.includes(value),
    },
    types: {
      type: String,
      default: "dark",
      validator: (value: string) => TYPE_OPTIONS.includes(value),
    },
    text: {
      type: String,
      default: "Title and Paragraph",
    },
  },
  emits: ["onclick"],
  setup(props, { emit }) {
    const titleOnClick = () => {
      emit("onclick");
    };

    return {
      titleOnClick,
    };
  },
});
</script>

<template>
  <h1 class="type-text" :class="[size, types]" @click="titleOnClick">
    {{ text }}
  </h1>
</template>

<style scoped lang="scss">
@import "styles.module.scss";
</style>
