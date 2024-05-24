<script lang="ts">
import { computed, ref, defineComponent } from "vue";
export default defineComponent({
  name: "MoleculesDropdown",

  setup() {
    const profile = computed(() => {
      return [
        {
          url: "#",
          text: "Opção 1",
        },
        {
          url: "#",
          text: "Opção 2",
        },
      ];
    });

    const isVisible = ref(false);

    const showDropdown = () => {
      isVisible.value = true;
    };

    const hideDropdown = () => {
      isVisible.value = false;
    };
    return {
      profile,
      isVisible,
      showDropdown,
      hideDropdown,
    };
  },
});
</script>
<template>
  <aside class="dropdown-content">
    <div class="dropdown-content__section">
      <AtomsParagraphTitle
        class="show-dropdown"
        size="small"
        text="Perfil"
        @mouseenter="showDropdown"
      />
      <div
        v-if="isVisible"
        class="dropdown-content__show"
        @mouseleave="hideDropdown"
      >
        <AtomsInternalLink class="link" :items="profile" />
      </div>
    </div>
  </aside>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
