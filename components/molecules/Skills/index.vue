<script lang="ts">
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
  name: "MoleculesSkills",
  emits: ["onClick"],
  setup() {
    const visible = ref(false);

    const show = () => {
      visible.value = !visible.value;
    };

    const items = computed(() => {
      return [
        {
          icon: "icons8-vue-js",
          url: "https://vuejs.org/",
        },
        {
          icon: "icons8-nuxt-js",
          url: "https://nuxt.com/",
        },
        {
          icon: "mysql",
          url: "https://www.mysql.com/",
        },
        {
          icon: "icons8-css",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
          icon: "icons8-sass",
          url: "https://sass-lang.com/",
        },
        {
          icon: "icons8-html",
          url: "https://www.w3schools.com/html/html_intro.asp",
        },
        {
          icon: "icons8-js",
          url: "https://devdocs.io/javascript/",
        },
        {
          icon: "ts",
          url: "https://www.typescriptlang.org/docs/",
        },
        {
          icon: "php",
          url: "https://www.php.net/manual/pt_BR/",
        },
      ];
    });

    return {
      visible,
      items,
      show,
    };
  },
});
</script>
<template>
  <AtomsParagraphTitle
    style="cursor: pointer"
    text="Skills"
    size="small"
    @click="show"
  />
  <article v-if="visible" class="skills-content">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="skills-content__main"
      @click="$emit('onClick')"
    >
      <NuxtLink :to="item.url">
        <AtomsIconSVG :name="item.icon" width="32px" />
      </NuxtLink>
    </div>
  </article>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
