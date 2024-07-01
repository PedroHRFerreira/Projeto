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
              information: "Coragem, o Cão Covarde",
              history:
                "Coragem, o Cão Covarde conta a história de Coragem, um cachorro facilmente assustado que vive em uma fazenda com Muriel e Eustácio Bagge, na cidade de Lugar Nenhum, no Kansas. Abandonado quando filhote, Coragem foi encontrado em um beco por Muriel Bagge, uma mulher escocesa de natureza doce e seu marido Eustácio.",
              url_image:
                "https://segredosdomundo.r7.com/wp-content/uploads/2015/08/13-teorias-da-conspiracao-chocantes-sobre-desenhos-animados.png",
            },
            {
              information: "Brian Griffin",
              history:
                " é um personagem fictício da sitcom animada americana Family Guy . Ele é um dos personagens principais da série e um membro da família Griffin . Criado, desenhado e dublado por Seth MacFarlane , ele é um labrador retriever branco antropomórfico que é o melhor amigo de Stewie Griffin e personagem cômico com a habilidade de falar, dirigir e ficar em pé sobre duas pernas.",
              url_image:
                "https://www.guiadasemana.com.br/contentFiles/system/pictures/2015/6/138077/original/o-brian-griffin-facebook.jpg",
            },
            {
              information: "George Jetson",
              history:
                "George reside com sua família e seu cachorro Astro nos Skypad Apartments [20] em Orbit City, em um futuro com as armadilhas das representações de fantasia científica da vida americana no futuro, como servos robôs , carros semelhantes a discos voadores e carros em movimento calçadas Todos os prédios de apartamentos estão montados em postes gigantes.",
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
