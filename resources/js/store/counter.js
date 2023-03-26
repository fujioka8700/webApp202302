import { defineStore } from "pinia";

export const useStoreCounter = defineStore("counter", {
  state: () => ({
    count: 1,
    count2: 2,
    user: { name: "John Doe" },
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
