import { defineStore } from "pinia";

export const useCategoryStore = defineStore("categoryStore", {
  state: () => ({
    category: "general",
  }),
  actions: {
    updateCategory(newCategory) {
      this.category = newCategory;
    },
  },
});
