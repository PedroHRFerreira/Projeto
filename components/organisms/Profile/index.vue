<script lang="ts">
import { defineComponent, computed, ref } from "vue";
export default defineComponent({
  name: "OrganismsProfile",
  setup() {
    const items = computed(() => {
      return [
        {
          title: "Perfil:",
          value: "Pedro H.Rodrigues",
        },
        {
          title: "Perfil:",
          value: "Pedro H.Rodrigues",
        },
        {
          title: "Perfil:",
          value: "Pedro H.Rodrigues",
        },
        {
          title: "Perfil:",
          value: "Pedro H.Rodrigues",
        },
      ];
    });

    const showModal = ref(false);

    const copyInfo = () => {
      const info = items.value
        .map(({ title, value }) => `${title} ${value}`)
        .join("\n");
      navigator.clipboard.writeText(info).then(() => {
        showModal.value = true;
        setTimeout(() => (showModal.value = false), 2000);
      });
    };

    return {
      items,
      showModal,
      copyInfo,
    };
  },
});
</script>
<template>
  <aside class="profile-content">
    <article class="profile-content__main">
      <div class="profile-content__main__section-title">
        <div class="profile-content__main__section-title__cmicon">
          <AtomsParagraphTitle
            text="Test in title"
            size="extra-small"
            class="title"
          />
          <AtomsIconSVG
            class="icon"
            name="rocket-lunch"
            width="14px"
            heigth="14px"
          />
        </div>
        <section class="profile-content__main__section-title__section">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="profile-content__main__section-title__section__text"
          >
            <AtomsParagraphTitle
              class="show-dropdown"
              size="small"
              :text="item.title"
            />
            <AtomsParagraphTitle
              class="show-dropdown"
              size="extra-small"
              :text="item.value"
            />
          </div>
        </section>
        <div class="profile-content__main__section-title__Button">
          <MoleculesButton text="copy" @click="copyInfo" />
        </div>
      </div>
    </article>
    <div v-if="showModal" class="modal">
      <AtomsParagraphTitle
        class="show-dropdown"
        size="small"
        text="Text copied!"
      />
    </div>
  </aside>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
