<script lang="ts">
import { computed, defineComponent, ref, onMounted } from "vue";
export default defineComponent({
  name: "MoleculesTimeLine",
  props: {
    backgroudCards: {
      type: String,
      default: "var(--neutralDarkGrey5)",
    },
  },
  setup() {
    const isVisible = ref(false);
    const visibleCards = ref<number[]>([]);

    const cardsShow = () => {
      visibleCards.value = [];
      isVisible.value = true;
      let delay = 0;
      cards.value.forEach((_, index) => {
        setTimeout(() => {
          visibleCards.value.push(index);
        }, delay);
        delay += 1200;
      });

      setTimeout(
        () => {
          isVisible.value = false;
          visibleCards.value = [];
        },
        cards.value.length * 1000 + 13000,
      );
    };

    const cards = computed(() => {
      return [
        {
          text: "But I must explain to you how all this mistaken idea of denouncing pleasure.",
        },
        {
          text: "But I must explain to you how all this mistaken idea of denouncing pleasure.",
        },
        {
          text: "But I must explain to you how all this mistaken idea of denouncing pleasure.",
        },
        {
          text: "But I must explain to you how all this mistaken idea of denouncing pleasure.",
        },
      ];
    });

    const colors = computed(() => {
      return [
        "4px 4px 12px var(--neutralDarkGrey5)",
        "4px 4px 12px var(--auxiliary-blue-600)",
        "4px 4px 12px var(--brandPrimary6)",
        "4px 4px 12px var(--auxiliary-orange-700)",
      ];
    });

    onMounted(() => {
      setInterval(cardsShow, 5000);
    });

    return {
      isVisible,
      visibleCards,
      cardsShow,
      cards,
      colors,
    };
  },
});
</script>
<template>
  <article class="section">
    <div class="content-time_line">
      <div class="content-time_line__before-triangle"></div>
      <div class="time-line" v-show="cardsShow"></div>
      <div class="content-time_line__before-triangle-end"></div>
    </div>
    <aside class="content">
      <div
        v-if="isVisible"
        v-for="(card, index) in cards"
        :key="index"
        :class="{ visible: visibleCards.includes(index) }"
        :style="{ boxShadow: colors[index % colors.length] }"
        class="card-history"
      >
        <div class="card-history__cards">
          <img
            class="image-card"
            src="/static/image/image-blue.webp"
            alt="image"
          />
          <AtomsParagraphTitle
            size="extra-small"
            :text="card.text"
            types="primary"
          />
        </div>
      </div>
    </aside>
  </article>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
