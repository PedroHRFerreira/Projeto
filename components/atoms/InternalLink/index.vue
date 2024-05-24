<script lang="ts">
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "AtomsInternalLink",
  props: {
    textDecoration: {
      type: String,
      default: "none",
    },
    color: {
      type: String,
      default: "black",
    },
    fontWeight: {
      type: String,
      Number,
      default: "600",
    },
    fontSize: {
      type: String,
      Number,
      default: "16px",
    },
  },
  setup(props) {
    const items = computed(() => {
      return [
        {
          url: "Url link",
          text: "Text link",
        },
      ];
    });

    const cssVar = computed(() => {
      return {
        "--text-decoration": props.textDecoration,
        "--color": props.color,
        "--font-weight": props.fontWeight,
        "--font-size": props.fontSize,
      };
    });

    return {
      items,
      cssVar,
    };
  },
});
</script>
<template>
  <div class="content-link">
    <ul v-for="(item, index) in items" :key="index">
      <li>
        <a class="content-link__style" :style="cssVar" :href="item.url">{{
          item.text
        }}</a>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
