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
  <aside class="dropdown-content">
    <div class="dropdown-content__section">
      <img
        src="/assets/icons/menu-list.svg"
        alt="tes"
        width="100%"
        height="60px"
        @click="showDropdown"
      />
      <transition v-if="isVisible">
        <div class="dropdown-content__show">
          <AtomsInternalLink
            class="link"
            :items="profile"
            @mouseleave="hideDropdown"
          />
        </div>
      </transition>
    </div>
  </aside>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
