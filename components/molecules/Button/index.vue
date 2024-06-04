<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "moleculesButton",
  props: {
    size: {
      type: String,
      default: "primary",
      validator: (value: string) => {
        return ["small", "primary", "medium", "big"].includes(value);
      },
    },
    type: {
      type: String,
      default: "cancel",
      validator: (value: string) => {
        return ["dafult", "cancel"].includes(value);
      },
    },
    sizeText: {
      type: String,
      default: "extra-small",
    },
    text: {
      type: String,
      default: "Button test",
    },
  },
  emits: ["Onclick"],
  setup(props, { emit }) {
    const ButtonClick = () => {
      emit("Onclick");
    };
    return {
      ButtonClick,
    };
  },
});
</script>
<template>
  <button
    class="recreational-button"
    :class="[size, type]"
    @click="ButtonClick"
  >
    <AtomsParagraphTitle :size="sizeText" :text="text" />
  </button>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
