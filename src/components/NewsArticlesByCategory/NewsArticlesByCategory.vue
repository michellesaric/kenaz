<script setup>
import { ref } from "vue";
import NewsArticleByCategory from "./NewsArticleByCategory/NewsArticleByCategory.vue";

const paginationNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const activeNumber = ref(paginationNumbers[0]);

const classClick = (number) => {
  activeNumber.value = number;
};
</script>

<template>
  <div class="news-articles-by-category">
    <h2 class="news-articles-by-category__main-title">News</h2>
    <NewsArticleByCategory />
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

<style lang="sass">
@import "./NewsArticleByCategory/_newsArticleByCategory.scss"
</style>
