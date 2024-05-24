<script lang="ts">
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "AtomsInternalLink",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    textDecoration: {
      type: String,
      default: "none",
    },
    color: {
      type: String,
      default: "black",
    },
    fontWeight: {
      type: [String, Number],
      default: "600",
    },
    fontSize: {
      type: [String, Number],
      default: "16px",
    },
  },
  emits: ["onClick"],
  setup(props, { emit }) {
    const cssVar = computed(() => {
      return {
        "--text-decoration": props.textDecoration,
        "--color": props.color,
        "--font-weight": props.fontWeight,
        "--font-size": props.fontSize,
      };
    });

    const profileOnClick = () => {
      emit("onClick");
      console.log("test");
    };

    return {
      cssVar,
      profileOnClick,
    };
  },
});
</script>
<template>
  <div class="content-link">
    <ul v-for="(item, index) in items" :key="index">
      <a
        class="content-link__style"
        :style="cssVar"
        :href="item.url"
        @click="profileOnClick"
        >{{ item.text }}</a
      >
    </ul>
  </div>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
