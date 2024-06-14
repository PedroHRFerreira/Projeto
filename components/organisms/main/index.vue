<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useMainStore } from "~/store/main/useMainStore";

export default defineComponent({
  name: "OrganismsMain",
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const store = useMainStore();

    const profileData = computed(() => store.mainProfile);

    onMounted(() => {
      store.fetchMain();
    });

    const items = computed(() => {
      if (!profileData.value || !profileData.value.personalInformation) {
        return [];
      }
      return profileData.value.personalInformation.map((item: any) => ({
        title: item.information,
        text: item.history,
      }));
    });

    return {
      profileData,
      items,
    };
  },
});
</script>

<template>
  <article class="main_all">
    <div class="main" :class="{ loading: isLoading }">
      <div class="main-section" v-for="(item, index) in items" :key="index">
        <AtomsParagraphTitle :text="profileData.profile" size="extra-small" />
        <AtomsParagraphTitle :text="item.title" size="extra-small" />
        <AtomsParagraphTitle :text="item.text" size="extra-small" />
      </div>
    </div>
    <div class="time-line">
      <MoleculesTimeLine />
    </div>
  </article>
</template>

<style scoped lang="scss">
@import "styles.module.scss";
</style>
