<script lang="ts">
export default defineComponent({
  name: "TemplatesMainPg",
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
  <OrganismsMain :showEmptyState="showEmptyState" />
</template>
