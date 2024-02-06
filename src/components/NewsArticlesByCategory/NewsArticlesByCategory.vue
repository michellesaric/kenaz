<script setup>
import { ref, computed } from "vue";
import { useCategoryStore } from "@/stores/CategoryStore";
import { categoryRename } from "@/utils/categoryRename";
import { toCamelCase } from "@/utils/toCamelCase";

const paginationNumbers = ["1", "2", "3", "4", "5", "6", "7"];

const classClick = (number) => {
  categoryStore.updatePaginationNumber(number);
};

const categoryStore = useCategoryStore();
const category = computed(() =>
  toCamelCase(categoryRename(categoryStore.activeCategory))
);

const news = ref(categoryStore.currentlyDisplayedNews);
</script>

<template>
  <section class="news-articles-by-category">
    <h2 class="news-articles-by-category__main-title">{{ category }}</h2>
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
