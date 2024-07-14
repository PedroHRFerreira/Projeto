<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useAboutStore } from "~/store/about/useAboutStore";

export default defineComponent({
  name: "OrganismsAbout",
  props: {
    showEmptyState: {
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
  <article v-if="!showEmptyState" class="about-content">
    <div v-if="aboutData.length > 0" class="about-content__layout">
      <div class="about-content__layout__text">
        <div class="about-content__layout__text__item">
          <AtomsParagraphTitle size="small" :text="aboutData[0].about_text" />
        </div>
        <div class="about-content__layout__text__item">
          <MoleculesImageSwitch :src-image="aboutData[0].about_url" />
        </div>
      </div>
      <div class="about-content__rotation">
        <MoleculesScrollingText :items="values" />
      </div>
    </div>
  </article>
  <MoleculesEmpty v-else />
</template>

<style scoped lang="scss">
@import "styles.module.scss";
</style>
