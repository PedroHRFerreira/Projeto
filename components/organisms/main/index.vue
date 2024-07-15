<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useMainStore } from "~/store/main/useMainStore";

export default defineComponent({
  name: "OrganismsMain",
  props: {
    showEmptyState: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const store = useMainStore();

    const profileData = computed(() => store.mainProfile.personalInformation);

    onMounted(() => {
      store.fetchMain();
    });

    const icons = computed(() => {
      return [
        "world",
        "smile",
        "building",
        "id-badge",
        "github-fill-svgrepo-com",
        "instagram",
        "discord",
        "gamepad",
        "browser",
        "rocket-lunch",
      ];
    });

    return {
      profileData,
      icons,
    };
  },
});
</script>

<template>
  <article v-if="!showEmptyState" class="main_all">
    <div class="main">
      <MoleculesCard :items="profileData" :icons="icons" />
    </div>
  </article>
  <MoleculesEmpty v-else />
</template>

<style scoped lang="scss">
@import "styles.module.scss";
</style>
