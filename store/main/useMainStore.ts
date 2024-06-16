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
              information: "What is Lorem Ipsum?",
              history:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              url_image:
                "https://segredosdomundo.r7.com/wp-content/uploads/2015/08/13-teorias-da-conspiracao-chocantes-sobre-desenhos-animados.png",
            },
            {
              information: "teste de informações2",
              history:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              url_image:
                "https://www.guiadasemana.com.br/contentFiles/system/pictures/2015/6/138077/original/o-brian-griffin-facebook.jpg",
            },
            {
              information: "teste de informações2",
              history:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              url_image:
                "https://arteref.com/wp-content/uploads/2019/04/george-jetson.jpg",
            },
          ],
        } as Imain,
      };
      this.setMainProfile(payload.data);
    },
  },
});
