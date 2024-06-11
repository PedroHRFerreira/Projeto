<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LayoutDefault",
  setup() {
    return {};
  },
});
</script>

<template>
  <main class="layout">
    <aside class="aside">
      <OrganismsNavBar />
    </aside>
    <section class="content">
      <router-view />
    </section>
  </main>
</template>

<style scoped lang="scss">
.layout {
  display: grid;
  grid-template-areas: "aside content";
  grid-template-columns: max-content 1fr;
  min-height: 100vh;
  transition: 0.5s ease-in-out;
  overflow: auto;
}
.aside {
  grid-area: aside;
  box-shadow: 2px 20px 20px red;
}
.content {
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: min(30px, 4vw);
  position: relative;
}
</style>
