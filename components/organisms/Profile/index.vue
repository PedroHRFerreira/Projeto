<script lang="ts">
import { defineComponent, computed, ref, onMounted } from "vue";
import { useProfileStore } from "~/store/profile/useProfileStore";
export default defineComponent({
  name: "OrganismsProfile",
  props: {
    showEmptyState: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const items = computed(() => {
      return [
        {
          title: "Name =>",
          value: "Pedro H.Rodrigues",
        },
        {
          title: "Age =>",
          value: "17 year",
        },
        {
          title: "Location =>",
          value: "Governador Valadares, MG, Brazil",
        },
        {
          title: "Interesses =>",
          value:
            " Desenvolvimento Web. Programação Funcional ,Desenvolvimento de Aplicações Modernas, Explorar Novas Tecnologias",
        },
      ];
    });

    const useProfile = useProfileStore();

    const images = computed(() =>
      useProfile.profile.map((profile) => profile.image),
    );

    onMounted(async () => {
      await useProfile.fetchProfile();
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
      images,
    };
  },
});
</script>
<template>
  <article v-if="!showEmptyState">
    <div class="main-profile">
      <div>
        <MoleculesVideosShorts :images="images" />
      </div>
      <aside class="profile-content">
        <article class="profile-content__main">
          <div class="profile-content__main__section-title">
            <section class="profile-content__main__section-title__section">
              <div
                v-for="(item, index) in items"
                :key="index"
                class="profile-content__main__section-title__section__text"
              >
                <AtomsParagraphTitle
                  class="text"
                  size="small"
                  :text="item.title"
                />
                <AtomsParagraphTitle
                  class="text"
                  size="extra-small"
                  :text="item.value"
                />
              </div>
              <MoleculesSkills />
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
    </div>
  </article>
  <MoleculesEmpty v-else />
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
