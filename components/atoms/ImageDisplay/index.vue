<script lang="ts">
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "AtomsImageDisplay",
  emits: ["onClickImg"],
  props: {
    value: {
      type: [String, Boolean, Number],
    },
    maxWidth: {
      type: String,
      default: "500px",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "auto",
    },
    alt: {
      type: String,
      default: "alt and test image",
    },
    itemsOn: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  setup(props, { emit }) {
    const cssVar = computed(() => {
      return {
        "--max-width": props.maxWidth,
        "--width": props.width,
        "--height": props.height,
      };
    });

    const clickImg = () => {
      emit("onClickImg");
      console.log("Click in image");
    };

    return {
      cssVar,
      clickImg,
    };
  },
});
</script>
<template>
  <div class="card-image">
    <img
      class="content-image"
      src="/static/image/image-blue.webp"
      :alt="alt"
      :style="cssVar"
      :value="value"
      @click="clickImg"
    />
    <hr v-if="itemsOn" />
    <div class="image-text">
      <slot />
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
