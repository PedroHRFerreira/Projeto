<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LayoutDefault",
});
</script>

<template>
  <div class="layout-container">
    <header class="layout-header">
      <OrganismsHeader />
    </header>
    <main class="layout-main">
      <section class="layout-content">
        <slot />
      </section>
    </main>
    <footer class="footer">
      <OrganismsFooter />
    </footer>
  </div>
</template>

<style scoped lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.layout-container {
  background-image: url("/public/images/ph.jpeg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
}

.layout-header {
  grid-row: 1;
  width: 100%;
}

.layout-main {
  grid-row: 2;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.layout-content {
  display: flex;
  flex-direction: column;
  padding: min(30px, 4vw);
  flex-grow: 1;
}
</style>
