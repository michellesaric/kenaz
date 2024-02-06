import { defineStore } from "pinia";
import { categoryRename } from "@/utils/categoryRename";
import { mapNewsDataByCategoryAndPageNumber } from "@/api/map";

export const useCategoryStore = defineStore("categoryStore", {
  state: () => ({
    activeCategory: "news",
    currentlyDisplayedNews: [],
    currentlySavedNews: [],
    currentPaginationNumber: 1,
  }),
  getters: {
    getCategory: (state) => state.category,
    getActiveCategory: (state) => state.activeCategory,
    getCurrentlyDisplayedNews: (state) => state.currentlyDisplayedNews,
    getCurrentPaginationNumber: (state) => state.currentPaginationNumber,
    getCurrentlySavedNews: (state) => state.currentlySavedNews,
  },
  actions: {
    updateCategory(newCategory) {
      this.activeCategory = newCategory;
      this.fetchNewsByCategoryAndPageNumber(
        categoryRename(newCategory),
        this.currentPaginationNumber
      );
    },
    updatePaginationNumber(newPaginationNumber) {
      this.currentPaginationNumber = newPaginationNumber;
      this.fetchNewsByCategoryAndPageNumber(
        categoryRename(this.activeCategory),
        newPaginationNumber
      );
    },
    fetchNewsByCategoryAndPageNumber(category, pageNumber) {
      const newsData = mapNewsDataByCategoryAndPageNumber(category, pageNumber);
      this.currentlyDisplayedNews = newsData;
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
    loadNewsDataFromLocalStorage() {
      const savedNewsData = localStorage.getItem("newsData");
      if (savedNewsData) {
        this.currentlySavedNews = JSON.parse(savedNewsData);
      }
    },
  },
  onInit() {
    this.loadNewsDataFromLocalStorage();
  },
});
