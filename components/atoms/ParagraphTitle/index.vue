<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AtomsParagraphTitle",
  props: {
    size: {
      type: String,
      default: "large",
      validator: (value: string) => {
        return [
          "extra-large",
          "large",
          "medium",
          "small",
          "extra-small",
        ].includes(value);
      },
    },
    types: {
      type: String,
      default: "dark",
      validator: (value: string) => {
        return ["default", "primary", "dark"].includes(value);
      },
    },
    text: {
      type: String,
      default: "Title and Paragraph",
    },
  },
  emits: ["onclick"],
  setup(props, { emit }) {
    const titleOnClick = () => {
      console.log("click in title");
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
