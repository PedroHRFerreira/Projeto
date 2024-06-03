<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "AtomsTag",
  props: {
    text: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "outline",
      validator: (value: string) => {
        return ["outline", "filter"].includes(value);
      },
    },
    state: {
      type: String,
      default: "default",
      validator: (value: string) => {
        return [
          "default",
          "recovered",
          "open",
          "negotiation",
          "payment_pending",
          "closed",
          "heated",
          "active",
          "inactive",
        ].includes(value);
      },
    },
  },
  emits: ["onClose"],
  setup(props, { emit }) {
    const closeTag = () => {
      emit("onClose", props.text);
    };

    const isFilter = computed(() => {
      return props.type === "filter";
    });

    return {
      closeTag,
      isFilter,
    };
  },
});
</script>
<template>
  <article :class="['tag', type, state]">
    {{ text }}
    <AtomsIconSVG
      v-if="isFilter"
      class="icon"
      name="close"
      width="14px"
      filled
      heigth="14px"
      @click="closeTag"
    />
  </article>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
