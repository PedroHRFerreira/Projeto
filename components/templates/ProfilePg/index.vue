<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
  name: "TemplatesProfilePg",
  setup() {
    const showEmptyState = ref(true);

    onMounted(() => {
      setTimeout(() => {
        showEmptyState.value = false;
      }, 5000);
    });

    return {
      showEmptyState,
    };
  },
});
</script>
<template>
  <main class="main">
    <OrganismsProfile :showEmptyState="showEmptyState" />
    <MoleculesSummary />
  </main>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
