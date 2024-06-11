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
              information: "teste de informações",
              history: "teste de história",
            },
          ],
        } as Imain,
      };
      this.setMainProfile(payload.data);
    },
  },
});
