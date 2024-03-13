// Types
import type { I_User } from "~/types/user";
// 大菠萝
import { defineStore } from "pinia";
// Utils
import { localStorage } from "~/utils/localStorage";

export const defaultUserState: I_User = {
  id: 0,
  email: "",
  username: "",
  createTime: "",
  token: "",
};

export const useUserStore = defineStore("user", {
  state: (): I_User => defaultUserState,

  actions: {
    initUserFromLocal() {
      const user = localStorage.get<I_User, I_User>("user", defaultUserState);
      this.$state = user;
    },

    logout() {
      localStorage.set("user", defaultUserState);
      this.$state = defaultUserState;
    },
  },

  getters: {
    isAuthenticated({ token }) {
      return token !== "";
    },
  },
});
