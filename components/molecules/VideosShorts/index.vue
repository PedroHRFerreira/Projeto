<script lang="ts">
import { defineComponent, ref, computed, onMounted, onUnmounted } from "vue";

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
    const startX = ref(0);
    const screenWidth = ref(window.innerWidth);

    const updateScreenWidth = () => {
      screenWidth.value = window.innerWidth;
    };

    const imagesToShow = computed(() => {
      const imagesPerView = screenWidth.value < 1810 ? 1 : 2;
      return props.images.slice(
        currentStartIndex.value,
        currentStartIndex.value + imagesPerView,
      );
    });

    const nextImages = () => {
      const imagesPerView = screenWidth.value < 1810 ? 1 : 2;
      currentStartIndex.value =
        (currentStartIndex.value + imagesPerView) % props.images.length;
    };

    const handleTouchStart = (event: TouchEvent) => {
      startX.value = event.touches[0].clientX;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      const endX = event.changedTouches[0].clientX;
      if (startX.value - endX > 30) {
        nextImages();
      }
    };

    onMounted(() => {
      window.addEventListener("resize", updateScreenWidth);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateScreenWidth);
    });

    return {
      imagesToShow,
      nextImages,
      handleTouchStart,
      handleTouchEnd,
    };
  },
});
</script>
<template>
  <article class="modal-short">
    <section
      class="modal-short--videos"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <div
        v-for="(image, index) in imagesToShow"
        :key="index"
        class="modal-short--videos__image"
      >
        <img :src="image" alt="Image carousel" width="100%" height="100%" />
      </div>
      <div class="modal-short--videos__border-icon" style="cursor: pointer">
        <AtomsIconSVG
          class="icon"
          name="chevron-right"
          width="42px"
          height="42px"
          filled
          current-color="var(--neutralLightGrey)"
          @click="nextImages"
        />
      </div>
    </section>
  </article>
</template>

<style scoped lang="scss">
@import "styles.module.scss";
</style>
