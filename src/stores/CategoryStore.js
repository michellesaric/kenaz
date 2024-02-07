import { defineStore } from "pinia";
import { categoryRename } from "@/utils/categoryRename";
import { mapNewsDataByCategoryAndPageNumber } from "@/api/map";

export const useCategoryStore = defineStore("categoryStore", {
  state: () => ({
    activeCategory: "",
    currentlyDisplayedNews: [],
    currentlySavedNews: [],
    currentPaginationNumber: 1,
  }),
  getters: {
    getActiveCategory: (state) => state.activeCategory,
    getCurrentlyDisplayedNews: (state) => state.currentlyDisplayedNews,
    getCurrentPaginationNumber: (state) => state.currentPaginationNumber,
    getCurrentlySavedNews: (state) => state.currentlySavedNews,
  },
  actions: {
    updateCategory(newCategory) {
      this.activeCategory = newCategory;
      this.saveCategoryToLocalStorage(newCategory);
      this.fetchNewsByCategoryAndPageNumber(
        categoryRename(newCategory),
        this.currentPaginationNumber
      );
    },
    updatePaginationNumber(newPaginationNumber, category) {
      this.currentPaginationNumber = newPaginationNumber;
      this.fetchNewsByCategoryAndPageNumber(
        categoryRename(category),
        newPaginationNumber
      );
    },
    async fetchNewsByCategoryAndPageNumber(category, pageNumber) {
      try {
        const newsData = await mapNewsDataByCategoryAndPageNumber(
          category,
          pageNumber
        );
        this.currentlyDisplayedNews = newsData;
      } catch (error) {
        console.error("Error fetching news data:", error);
        this.currentlyDisplayedNews = [];
      }
    },
    updateNewsData(newsData) {
      this.currentlySavedNews = newsData;
      this.saveNewsDataToLocalStorage(newsData);
    },
    resetCategory() {
      (this.activeCategory = ""), (this.currentlyDisplayedNews = []);
      this.currentlySavedNews = [];
      this.saveNewsDataToLocalStorage([]);
    },
    saveNewsDataToLocalStorage(newsData) {
      localStorage.setItem("newsData", JSON.stringify(newsData));
    },
    saveCategoryToLocalStorage(category) {
      localStorage.setItem("category", JSON.stringify(category));
    },
    loadNewsDataFromLocalStorage() {
      const savedNewsData = localStorage.getItem("newsData");
      if (savedNewsData) {
        this.currentlySavedNews = JSON.parse(savedNewsData);
      }
    },
    loadCategoryFromLocalStorage() {
      const savedCategory = localStorage.getItem("category");
      if (savedCategory) {
        this.activeCategory = JSON.parse(savedCategory);
        this.fetchNewsByCategoryAndPageNumber(
          categoryRename(this.activeCategory),
          this.currentPaginationNumber
        );
      }
    },
  },
  onInit() {
    this.loadNewsDataFromLocalStorage();
    this.loadCategoryFromLocalStorage();
  },
});
