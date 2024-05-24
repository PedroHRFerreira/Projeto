<script setup lang="ts">
import {
  ref,
  watchEffect,
  defineProps,
  defineComponent,
  withDefaults,
} from "vue";

defineComponent({
  name: "AtomsIconSVG",
});

const props = withDefaults(
  defineProps<{
    name: string;
    filled?: boolean;
    width?: string | number;
    height?: string | number;
    currentColor?: string;
  }>(),
  {
    filled: false,
    height: "24px",
    width: "24px",
    currentColor: "currentColor",
  },
);

const icon = ref<string | Record<string, any>>("");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let hasStroke = false;

async function getIcon() {
  try {
    const iconsImport = import.meta.glob("assets/icons/**/**.svg", {
      as: "raw",
      eager: false,
    });
    const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]();
    if (rawIcon.includes("stroke")) {
      hasStroke = true;
    }
    icon.value = rawIcon;
  } catch {
    // eslint-disable-next-line no-console
    console.error(
      `[nuxt-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`,
    );
  }
}

await getIcon();

watchEffect(getIcon);

watchSyncEffect(() => {
  if (props.filled) {
    icon.value = icon.value.replace(
      /fill=".*?"/g,
      `fill="${props.currentColor}"`,
    );
  }

  if (props.width) {
    icon.value = icon.value.replace(/width=".*?"/g, `width="${props.width}"`);
  }

  if (props.height) {
    icon.value = icon.value.replace(
      /height=".*?"/g,
      `height="${props.height}"`,
    );
  }
});
</script>

<template>
  <span class="icon-common" v-html="icon" />
</template>

<style scoped lang="scss">
@import "styles.module.scss";
</style>
