<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "OrganismsFooter",
});
</script>
<template>
  <article class="footer">
    <div class="footer__content">
      <AtomsParagraphTitle
        class="text"
        size="small"
        text="Feito por: Pedro H.Rodrigues"
      />
      <AtomsIconSVG name="rocket-lunch" width="32px" />
      <AtomsIconSVG class="icon" name="tinta-spray" width="32px" />
    </div>
  </article>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
