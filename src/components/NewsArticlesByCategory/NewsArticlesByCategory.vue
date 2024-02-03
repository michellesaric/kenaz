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
  <section class="news-articles-by-category">
    <h2 class="news-articles-by-category__main-title">News</h2>
    <router-link to="/article">
      <article
        class="news-article-by-category"
        v-for="newsItem in news"
        :key="newsItem.id"
      >
        <NewsArticleByCategory v-bind="newsItem" />
      </article>
    </router-link>
    <section class="news-articles-by-category__pagination">
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
    </section>
  </section>
</template>
