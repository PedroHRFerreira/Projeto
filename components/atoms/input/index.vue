<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";

export default defineComponent({
  name: "AtomsInput",
  emits: ["onClick", "input"],
  props: {
    type: {
      type: String,
      default: "text",
    },
    minLength: {
      type: String,
      default: "4",
    },
    maxLength: {
      type: String,
      default: "8",
    },
    borderColor: {
      type: String,
      default: "black",
    },
    placeholder: {
      type: String,
      default: "",
    },
    maxWidth: {
      type: String,
      default: "auto",
    },
    width: {
      type: String,
      default: "100%",
    },
    fontSize: {
      type: String,
      default: "16px",
    },
    height: {
      type: String,
      default: "auto",
    },
    checked: {
      type: Boolean,
      default: false,
    },
    placeholderColor: {
      type: String,
      default: "black",
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    disabledColor: {
      type: String,
      default: "#363636",
    },
    padding: {
      type: String,
      default: "10px 15px",
    },
    value: {
      type: [String, Number, Boolean],
      default: null,
    },
  },
  setup(props, { emit }) {
    const inputValue = ref(props.value);

    const cssVars = computed(() => {
      return {
        "--width": props.width,
        "--height": props.height,
        "--max-width": props.maxWidth,
        "--border-color": props.borderColor,
        "--font-size": props.fontSize,
        "--placeholder-color": props.placeholderColor,
        "--disabled-color": props.disabledColor,
        "--padding": props.padding,
      };
    });

    watch(
      () => props.value,
      (newValue) => {
        inputValue.value = newValue;
      },
    );

    const onInput = (ev: Event) => {
      const target = ev.target as HTMLInputElement;
      let value: string | number | boolean = target.value;

      if (props.type === "number") {
        value = Number(value);
      } else if (props.type === "checkbox") {
        value = target.checked;
      }

      emit("input", value);
    };

    const clickInput = () => {
      emit("onClick");
    };

    return {
      inputValue,
      cssVars,
      clickInput,
      onInput,
    };
  },
});
</script>

<template>
  <input
    :type="type"
    class="input"
    :class="{ rounded }"
    :placeholder="placeholder"
    :value="inputValue"
    :style="cssVars"
    :checked="checked"
    :minlength="minLength"
    :maxlength="maxLength"
    @click="clickInput"
    @input="onInput"
  />
</template>

<style scoped lang="scss">
@import "styles.module.scss";
</style>
