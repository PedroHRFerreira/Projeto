import { defineStore } from "pinia";
import { Iabout } from "~/types/about";

export const useAboutStore = defineStore("useAboutStore", {
  state: () => ({
    about: [] as Iabout[],
  }),

  actions: {
    setAbout(aboutU: Iabout[]) {
      this.$state.about = aboutU;
    },

    async fetchAboutPage(): Promise<void> {
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

      const payload = [
        {
          about_text:
            "Pedro Henrique tem 17 anos e está iniciando sua jornada como desenvolvedor front-end na Braip, onde já acumula 1.4 meses de experiência. Ele possui um sólido domínio de JavaScript, TypeScript, Vue.js, Nuxt.js, Sass, CSS, HTML e integração com bancos de dados através de ferramentas como Workbench e DBeaver-CE. Pedro está determinado a expandir suas habilidades para se tornar um desenvolvedor full-stack. Ele busca integrar seu conhecimento front-end com competências back-end, visando criar soluções completas e eficientes para projetos desafiadores. Sua dedicação em melhorar continuamente a experiência do usuário se reflete na aplicação das melhores práticas de desenvolvimento em cada projeto que participa. Com uma paixão evidente pelo desenvolvimento web, Pedro mantém um forte compromisso com o aprendizado contínuo. Ele está sempre em busca de novos desafios que possam ampliar suas habilidades técnicas e contribuir para iniciativas inovadoras e de alto impacto no campo da tecnologia.",
          about_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc3RXLJttg1DVvV3-zvN46fyzRLQJNiFF8nddsNwvLAaWcJItB-R1LsgAizAuyCBv16SI&usqp=CAU",
          about_tags: [
            "Dev",
            "Trainee",
            "Junior (JR)",
            "full stack",
            "Pleno (PL)",
            "Sênior (SR)",
            "Master",
            "Tech Lead",
          ],
        },
      ];
      this.setAbout(payload);
    },
  },
});
