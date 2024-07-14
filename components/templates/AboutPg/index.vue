<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TemplatesAboutPg",
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
  <main class="about">
    <OrganismsAbout :showEmptyState="showEmptyState" />
  </main>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
