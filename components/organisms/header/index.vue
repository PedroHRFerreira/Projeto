<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "OrganismsHeader",
  setup() {
    const items = computed(() => {
      return [
        {
          url: "/About",
          text: "About me",
        },
        {
          url: "/my-profile",
          text: "Profile",
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
        <a class="profile-href" href="/">
          <AtomsTag text="PedroHRFerreira" type="none" />
        </a>
      </div>
      <div class="header-nav__items__link">
        <AtomsInternalLink :items="items" class="link" />
        <MoleculesDropdown :profile="items" class="modal-profile" />
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
