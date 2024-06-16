<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useAboutStore } from "~/store/about/useAboutStore";

export default defineComponent({
  name: "OrganismsAbout",
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const store = useAboutStore();
    const aboutData = computed(() => store.about);

    const values = computed(() => {
      return aboutData.value[0]?.about_tags;
    });

    onMounted(() => {
      store.fetchAboutPage();
    });

    return {
      aboutData,
      values,
    };
  },
});
</script>

<template>
  <article class="about-content" :class="{ loading: isLoading }">
    <div v-if="aboutData.length > 0" class="about-content__layout">
      <div class="about-content__layout__text">
        <AtomsParagraphTitle size="small" :text="aboutData[0].about_text" />
      </div>
      <MoleculesImageSwitch
        style="height: 700px"
        :src-image="aboutData[0].about_url"
      />
    </div>
    <MoleculesScrollingText :items="values" />
  </article>
</template>

<style scoped lang="scss">
@import "styles.module.scss";
</style>
