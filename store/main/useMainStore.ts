import { defineStore } from "pinia";
import { Imain } from "~/types/main";

const images = import.meta.glob("~/assets/icons/*.svg");

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
              title: "Location",
              text: "Governador Valadares, MG, Brazil.",
            },
            {
              title: "Hello",
              text: "Olá, meu nome é Pedro Henrique.",
            },
            {
              title: "Work",
              text: "Atualmente trabalho na empresa Braip.",
            },
            {
              title: "Profile",
              text: "Sou um Dev Front-End",
            },
            {
              title: "GitHub",
              text: "https://github/PedroHRFerreira",
            },
            {
              title: "Instagram",
              text: "pedrohr_dev",
            },
            {
              title: "Discord",
              text: "pedrorodrigues8128",
            },
            {
              title: "Game",
              text: "Gosto muito de jogos, de vários genêros.",
            },
            {
              title: "programming",
              text: "tenho conhecimento de lgumas lingugens de programção, como Js,Ts,PHP e Go.",
            },
            {
              title: "objectives",
              text: "Virar um fullstack e me desenvolver mais na parte de back-end.",
            },
          ],
        } as Imain,
      };
      this.setMainProfile(payload.data);
    },
  },
});
