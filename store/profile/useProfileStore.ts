import { defineStore } from "pinia";
import { IProfile } from "~/types/profile";

export const useProfileStore = defineStore("useProfileStore", {
  state: () => ({
    profile: [] as IProfile[],
  }),

  actions: {
    setProfile(newProfile: IProfile[]) {
      this.$state.profile = newProfile;
    },

    async fetchProfile(): Promise<void> {
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

      const payload = {
        data: [
          {
            image: "images/pedro-img.png",
          },
          {
            image: "images/img-cruz.jpg",
          },
          {
            image: "images/p.jpeg",
          },
          {
            image: "images/gt.jpeg",
          },
          {
            image: "images/n.jpeg",
          },
          {
            image: "images/grf.jpg",
          },
        ],
      };
      this.setProfile(payload.data);
    },
  },
});
