<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "MoleculesDropdown",
  props: {
    profile: {
      type: Array,
      default: () => [],
    },
  },

  setup() {
    const isVisible = ref(false);

    const showDropdown = () => {
      isVisible.value = true;
    };

    const hideDropdown = () => {
      isVisible.value = false;
    };
    return {
      isVisible,
      showDropdown,
      hideDropdown,
    };
  },
});
</script>
<template>
  <aside class="dropdown-content" @mouseleave="hideDropdown">
    <div class="dropdown-content__section">
      <a class="profile-href" href="/">
        <AtomsParagraphTitle
          class="show-dropdown"
          size="small"
          text="Perfil"
          @mouseenter="showDropdown"
        />
      </a>
      <transition v-if="isVisible">
        <div class="dropdown-content__show">
          <AtomsInternalLink class="link" :items="profile" />
        </div>
      </transition>
    </div>
  </aside>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
