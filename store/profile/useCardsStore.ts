import { defineStore } from "pinia";
import { Icards } from "~/types/cards";

export const useCardsStore = defineStore("useCardsStore", {
  state: () => ({
    cards: [] as Icards[],
  }),

  actions: {
    setCards(card: Icards[]) {
      this.$state.cards = card;
    },

    async fetchCards(): Promise<void> {
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

      const payload = {
        data: [
          {
            imageInteractive: "/images/atc.jpg",
            imageFixed: "/images/image-dk.png",
            text: "text de imagem 1",
          },
          {
            imageInteractive: "/images/as.jpg",
            imageFixed: "/images/yy.webp",
            text: "text de imagem 2",
          },
          {
            imageInteractive: "/images/ihg.png",
            imageFixed: "/images/gri.avif",
            text: "text de imagem 3",
          },
          {
            imageInteractive: "/images/av.jpg",
            imageFixed: "/images/wer.png",
            text: "text de imagem 4",
          },
        ],
      };
      this.setCards(payload.data);
    },
  },
});
