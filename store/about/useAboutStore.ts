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
            "Tenho 17 anos e estou iniciando minha jornada como desenvolvedor front-end na Braip, onde já acumulo 1.4 meses de experiência. Possuo um sólido domínio de JavaScript, TypeScript, Vue.js, Nuxt.js, Sass, CSS, HTML e integração com bancos de dados através de ferramentas como Workbench e DBeaver-CE.Estou determinado a expandir minhas habilidades para me tornar um desenvolvedor full-stack. Busco integrar meu conhecimento front-end com competências back-end, visando criar soluções completas e eficientes para projetos desafiadores. Minha dedicação em melhorar continuamente a experiência do usuário se reflete na aplicação das melhores práticas de desenvolvimento em cada projeto que participo.Com uma paixão evidente pelo desenvolvimento web, mantenho um forte compromisso com o aprendizado contínuo. Estou sempre em busca de novos desafios que possam ampliar minhas habilidades técnicas e contribuir para iniciativas inovadoras e de alto impacto no campo da tecnologia.",
          about_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc3RXLJttg1DVvV3-zvN46fyzRLQJNiFF8nddsNwvLAaWcJItB-R1LsgAizAuyCBv16SI&usqp=CAU",
          about_tags: [
            "Vue",
            "Nuxt",
            "Html5",
            "Css3",
            "Sass",
            "Json",
            "JavaScript",
            "TypeScript",
            "PHP",
          ],
        },
      ];
      this.setAbout(payload);
    },
  },
});
