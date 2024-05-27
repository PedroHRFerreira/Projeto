<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "MoleculesModal",
  setup() {
    const items = computed(() => {
      return [
        {
          type: "text",
          text: "input text 1",
          value: null,
        },
        {
          type: "number",
          text: "input text 2",
          value: null,
        },
        {
          type: "text",
          text: "input text 3",
          value: null,
        },
      ];
    });

    return {
      items,
    };
  },
});
</script>
<template>
  <aside class="modal-content">
    <div class="modal-content__title">
      <div class="icon">
        <AtomsIconSVG name="rocket-lunch" />
      </div>
      <AtomsParagraphTitle
        size="medium"
        text="Title in modal"
        types="primary"
      />
    </div>
    <section class="modal-content__section">
      <AtomsInput
        v-for="(item, index) in items"
        :key="index"
        :type="item.type"
        :placeholder="item.text"
        :value="item.value"
      />
    </section>
    <div></div>
    <article></article>
  </aside>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
