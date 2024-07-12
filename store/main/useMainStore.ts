import { defineStore } from "pinia";
import { Imain } from "~/types/main";

export const useMainStore = defineStore("useMainStore", {
  state: () => ({
    mainProfile: {} as Imain,
  }),

  actions: {
    setMainProfile(main: Imain) {
      this.$state.mainProfile = main;
    },

    async fetchMain(): Promise<void> {
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

      const payload = {
        type: "success",
        status: 200,
        data: {
          profile: 1,
          personalInformation: [
            {
              title: "Coragem, o Cão Covarde",
              text: "Coragem, o Cão Covarde conta a história de Coragem.",
            },
            {
              title: "Brian Griffin",
              text: " é um personagem animado da americana Family Guy.",
            },
            {
              title: "George Jetson",
              text: "George reside com sua família e seu cachorro Astro nos Skypad Apartments.",
            },
            {
              title: "Coragem, o Cão Covarde",
              text: "Coragem, o Cão Covarde conta a história de Coragem.",
            },
            {
              title: "Brian Griffin",
              text: " é um personagem animado da americana Family Guy.",
            },
            {
              title: "George Jetson",
              text: "George reside com sua família e seu cachorro Astro nos Skypad Apartments.",
            },
            {
              title: "Coragem, o Cão Covarde",
              text: "Coragem, o Cão Covarde conta a história de Coragem.",
            },
            {
              title: "Brian Griffin",
              text: " é um personagem animado da americana Family Guy.",
            },
            {
              title: "George Jetson",
              text: "George reside com sua família e seu cachorro Astro nos Skypad Apartments.",
            },
            {
              title: "George Jetson",
              text: "George reside com sua família e seu cachorro Astro nos Skypad Apartments.",
            },
          ],
        } as Imain,
      };
      this.setMainProfile(payload.data);
    },
  },
});
