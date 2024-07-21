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
              title: "Location",
              text: "Governador Valadares, MG, Brazil.",
              icon: "world",
            },
            {
              title: "Hello",
              text: "Olá, meu nome é Pedro Henrique.",
              icon: "smile",
            },
            {
              title: "Work",
              text: "Atualmente trabalho na empresa Braip.",
              icon: "building",
            },
            {
              title: "Profile",
              text: "Sou um Dev Front-End",
              icon: "id-badge",
            },
            {
              title: "GitHub",
              text: "https://github/PedroHRFerreira",
              icon: "github-fill-svgrepo-com",
              url: "https://github.com/PedroHRFerreira",
            },
            {
              title: "Instagram",
              text: "pedrohr_dev",
              icon: "instagram",
              url: "https://www.instagram.com/pedrohr_dev/",
            },
            {
              title: "Discord",
              text: "pedrorodrigues8128",
              icon: "discord",
              url: "https://discord.com/channels/@me",
            },
            {
              title: "Game",
              text: "Gosto muito de jogos, de vários genêros.",
              icon: "gamepad",
            },
            {
              title: "programming",
              text: "tenho conhecimento de lgumas lingugens de programção, como Js,Ts,PHP e Go.",
              icon: "browser",
            },
            {
              title: "objectives",
              text: "Virar um fullstack e me desenvolver mais na parte de back-end.",
              icon: "rocket-lunch",
            },
          ],
        } as Imain,
      };
      this.setMainProfile(payload.data);
    },
  },
});
