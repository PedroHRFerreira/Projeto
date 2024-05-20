<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AtomsTitle",
  props: {
    sizeTitle: {
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
    typeTitle: {
      type: String,
      default: "dark",
      validator: (value: string) => {
        return ["default", "primary", "dark"].includes(value);
      },
    },
    text: {
      type: String,
      default: "Title",
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
  <h1 class="title-text" :class="[sizeTitle, typeTitle]" @click="titleOnClick">
    {{ text }}
  </h1>
</template>

<style scoped lang="scss">
@import "styles.module.scss";
</style>
