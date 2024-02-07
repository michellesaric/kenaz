<script setup>
import { ref, onMounted, defineProps } from "vue";
import NewsFeedBox from "./NewsFeedBox.vue";
import { mapNewsDataByCategoryAndPageSize } from "@/api/map";
import { useCategoryStore } from "@/stores/CategoryStore";

const categoryStore = useCategoryStore();
const props = defineProps(["title", "borderColor"]);
const category = props.title === "News" ? "general" : "sports";
const noImageAvailable = "src/assets/images/NoImageAvailable.jpg";

const news = ref([]);

onMounted(async () => {
  try {
    const data = await mapNewsDataByCategoryAndPageSize(category, 3);
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
    <div class="news-row">
      <router-link
        :to="'/article/' + newsItem.id"
        class="news-row__card"
        @click="saveArticle(newsItem)"
        v-for="newsItem in news"
        :key="newsItem.id"
      >
        <div
          class="news-row__card-image"
          :style="{
            backgroundImage: `url(${newsItem.imageUrl || noImageAvailable})`,
          }"
        ></div>
        <div class="news-row__card-date-comment-wrapper">
          <h4 class="news-row__card-date">{{ newsItem.date }}</h4>
          <h4 class="news-row__card-comments">
            {{ newsItem.comments }}
          </h4>
        </div>
        <p class="news-row__card-title">{{ newsItem.title }}</p>
      </router-link>
    </div>
  </NewsFeedBox>
</template>
