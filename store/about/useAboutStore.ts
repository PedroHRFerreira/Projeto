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
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          about_url:
            "https://thumbs.dreamstime.com/b/%C3%ADcone-do-s%C3%B3lido-preto-avatar-perfil-de-usu%C3%A1rio-121102166.jpg",
          about_tags: [
            "about_tags-1",
            "about_tags-2",
            "about_tags-3",
            "about_tags-4",
            "about_tags-5",
            "about_tags-6",
            "about_tags-7",
            "about_tags-8",
          ],
        },
      ];
      this.setAbout(payload);
    },
  },
});
