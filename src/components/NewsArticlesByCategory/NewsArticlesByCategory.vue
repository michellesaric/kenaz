<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { mapNewsDataByCategoryAndPageNumber } from "@/api/map";
import NewsArticleByCategory from "./NewsArticleByCategory.vue";
import { useCategoryStore } from "@/stores/CategoryStore";
import { categoryRename } from "@/utils/categoryRename";
import { toCamelCase } from "@/utils/toCamelCase";

const paginationNumbers = ["1", "2", "3", "4", "5", "6", "7"];
const activeNumber = ref(paginationNumbers[0]);

const classClick = (number) => {
  activeNumber.value = number;
};

const categoryStore = useCategoryStore();
const category = computed(() =>
  toCamelCase(categoryRename(categoryStore.category))
);

const news = ref([]);

const fetchData = async () => {
  try {
    const data = await mapNewsDataByCategoryAndPageNumber(
      categoryStore.category,
      activeNumber.value
    );
    news.value = data;
  } catch (error) {
    console.error("Error fetching news data:", error);
  }
};

onMounted(fetchData);

watch([category, activeNumber], fetchData);
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
          { active: activeNumber === paginationNumber },
        ]"
      >
        {{ paginationNumber }}
      </div>
    </section>
  </section>
</template>
