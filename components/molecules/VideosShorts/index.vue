<script lang="ts">
import { defineComponent, ref, computed } from "vue";
export default defineComponent({
  name: "MoleculesVideosShorts",
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const currentStartIndex = ref(0);

    const imagesToShow = computed(() => {
      return props.images.slice(
        currentStartIndex.value,
        currentStartIndex.value + 2,
      );
    });

    const nextImages = () => {
      currentStartIndex.value =
        (currentStartIndex.value + 2) % props.images.length;
    };

    return {
      imagesToShow,
      nextImages,
    };
  },
});
</script>
<template>
  <article class="modal-short">
    <section class="modal-short--videos">
      <div
        v-for="(image, index) in imagesToShow"
        :key="index"
        class="modal-short--videos__image"
      >
        <img :src="image" alt="Image carousel" width="100%" height="100%" />
      </div>
      <div class="modal-short--videos__border-icon">
        <AtomsIconSVG
          class="icon"
          name="chevron-right"
          width="42px"
          height="42px"
          filled
          current-color="var(--neutralDarkGrey)"
          @click="nextImages"
        />
      </div>
    </section>
  </article>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
