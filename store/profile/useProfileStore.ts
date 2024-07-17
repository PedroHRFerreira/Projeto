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
            image: "http://localhost:3000/images/pedro-img.png",
          },
          {
            image: "http://localhost:3000/images/pedro-img.png",
          },
          {
            image: "http://localhost:3000/images/img-cruz.jpg",
          },
        ],
      };
      this.setProfile(payload.data);
    },
  },
});
