<script setup>
import { ref } from "vue";
import { newsByCategory } from "./newsArticlesByCategory";
import NewsArticleByCategory from "./NewsArticleByCategory.vue";

const newsData = ref(newsByCategory);
const news = newsData.value;

const paginationNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const activeNumber = ref(paginationNumbers[0]);

const classClick = (number) => {
  activeNumber.value = number;
};
</script>

<template>
  <div class="news-articles-by-category">
    <h2 class="news-articles-by-category__main-title">News</h2>
    <div
      class="news-article-by-category"
      v-for="newsItem in news"
      :key="newsItem.id"
    >
      <NewsArticleByCategory v-bind="newsItem" />
    </div>
    <div class="news-articles-by-category__pagination">
      <div
        v-for="paginationNumber in paginationNumbers"
        :key="paginationNumber"
        @click="classClick(paginationNumber)"
        :class="[
          'news-articles-by-category__pagination-numbers',
          { active: activeNumber === paginationNumber },
        ]"
      >
        {{ paginationNumber }}
      </div>
    </div>
  </div>
</template>
