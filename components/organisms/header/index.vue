<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "OrganismsHeader",
  setup() {
    const items = computed(() => {
      return [
        {
          url: "/",
          text: "Home",
        },
        {
          url: "/About",
          text: "About me",
        },
      ];
    });

    return {
      items,
    };
  },
});
</script>
<template>
  <header class="header-nav">
    <nav class="header-nav__items">
      <div class="header-nav__items__route">
        <OrganismsModal />
        <AtomsTag text="PedroHRFerreira" type="none" />
      </div>
      <div class="header-nav__items__link">
        <AtomsInternalLink :items="items" color="aqua" class="link" />
      </div>
      <div class="decoration">
        <MoleculesButton class="decoration__btn" size="primary" text="Olá👋" />
      </div>
    </nav>
  </header>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
