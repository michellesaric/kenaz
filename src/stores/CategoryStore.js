import { defineStore } from "pinia";
import { categoryRename } from "@/utils/categoryRename";

export const useCategoryStore = defineStore("categoryStore", {
  state: () => ({
    category: "general",
    activeCategory: "news",
  }),
  actions: {
    updateCategory(newCategory) {
      this.activeCategory = newCategory;
      this.category = categoryRename(newCategory);
    },
    resetCategory() {
      this.activeCategory = "";
      this.category = "";
    },
  },
});
