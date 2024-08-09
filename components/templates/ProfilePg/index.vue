<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
export default defineComponent({
  name: "TemplatesProfilePg",
  setup() {
    const showEmptyState = ref(true);

    const cards = computed(() => {
      return [
        {
          text: "test",
        },
        {
          text: "test",
        },
        {
          text: "test",
        },
        {
          text: "test",
        },
      ];
    });

    onMounted(() => {
      setTimeout(() => {
        showEmptyState.value = false;
      }, 5000);
    });

    return {
      cards,
      showEmptyState,
    };
  },
});
</script>
<template>
  <main class="main">
    <OrganismsProfile :showEmptyState="showEmptyState">
      <MoleculesCardInteractive :items="cards" />
    </OrganismsProfile>
  </main>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
