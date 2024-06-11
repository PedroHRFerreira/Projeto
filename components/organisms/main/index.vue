<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useMainStore } from "~/store/main/useMainStore";

export default defineComponent({
  name: "OrganismsMain",
  setup() {
    const store = useMainStore();

    const profileData = store.mainProfile;

    onMounted(() => {
      store.fetchMain();
    });

    return {
      profileData,
    };
  },
});
</script>

<template></template>

<style scoped lang="scss">
@import "styles.module.scss";
</style>
