<script setup>
import { computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useCategoryStore } from "@/stores/CategoryStore";
import { toCamelCase } from "@/utils/toCamelCase";
import NewsArticleByCategory from "./NewsArticleByCategory.vue";

const route = useRoute();

onBeforeMount(() => {
  const currentCategoryFromUrl = route.params.category;
  if (currentCategoryFromUrl != categoryStore.activeCategory) {
    categoryStore.updateCategory(currentCategoryFromUrl);
  }
});

const paginationNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const categoryStore = useCategoryStore();
const category = computed(() => toCamelCase(categoryStore.activeCategory));

const classClick = (number) => {
  categoryStore.updatePaginationNumber(number, categoryStore.activeCategory);
};

const news = computed(() => categoryStore.currentlyDisplayedNews);
</script>

<template>
  <section class="news-articles-by-category">
    <h2 class="news-articles-by-category__main-title">
      {{ category }}
    </h2>
    <article
      class="news-article-by-category"
      v-for="newsItem in news"
      :key="newsItem.id"
    >
      <NewsArticleByCategory v-bind="newsItem" />
    </article>
    <section class="news-articles-by-category__pagination">
      <div
        v-for="paginationNumber in paginationNumbers"
        :key="paginationNumber"
        @click="classClick(paginationNumber)"
        :class="[
          'news-articles-by-category__pagination-numbers',
          {
            active: categoryStore.currentPaginationNumber === paginationNumber,
          },
        ]"
      >
        {{ paginationNumber }}
      </div>
    </section>
  </section>
</template>
