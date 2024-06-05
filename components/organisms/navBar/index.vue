<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "OrganismsNavBar",
  setup() {
    const myProfile = computed(() => {
      return [
        {
          url: "/my-profile",
          text: "My profile",
        },
        {
          url: "/About",
          text: "About me",
        },
      ];
    });

    return {
      myProfile,
    };
  },
});
</script>
<template>
  <aside class="nav-bar">
    <div class="nav-bar__content">
      <MoleculesDropdown :profile="myProfile" style="height: 300px" />
      <div class="nav-bar__content__profile">
        <MoleculesIconProfile />
      </div>
    </div>
  </aside>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
