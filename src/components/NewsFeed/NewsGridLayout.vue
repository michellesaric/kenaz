<script setup>
import { ref, onMounted, defineProps } from "vue";
import NewsFeedBox from "./NewsFeedBox.vue";
import { mapNewsDataByCategoryAndPageSize } from "@/api/map";
import { useCategoryStore } from "@/stores/CategoryStore";

const categoryStore = useCategoryStore();
const props = defineProps(["title", "borderColor"]);
const noImageAvailable = "src/assets/images/NoImageAvailable.jpg";

const news = ref([]);

onMounted(async () => {
  try {
    const data = await mapNewsDataByCategoryAndPageSize("business", 4);
    news.value = data;
  } catch (error) {
    console.error("Error fetching news data:", error);
  }
});

const saveArticle = (newsItem) => {
  categoryStore.updateNewsData(newsItem);
};
</script>

<template>
  <NewsFeedBox :title="title" :borderColor="borderColor">
    <div class="news-card-small">
      <router-link
        :to="'/article' + newsItem.id"
        class="news-card-small__card"
        @click="saveArticle(newsItem)"
        v-for="newsItem in news"
        :key="newsItem.id"
      >
        <div
          class="news-card-small__card-image"
          :style="{
            backgroundImage: `url(${newsItem.imageUrl || noImageAvailable})`,
          }"
        ></div>
        <div class="news-card-small__card-date-title-wrapper">
          <h4 class="news-card-small__card-date">{{ newsItem.date }}</h4>
          <p class="news-card-small__card-title">{{ newsItem.title }}</p>
        </div>
      </router-link>
    </div>
  </NewsFeedBox>
</template>
