<script lang="ts">
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
  <OrganismsProfile :showEmptyState="showEmptyState" />
</template>
