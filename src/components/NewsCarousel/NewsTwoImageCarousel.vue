<script setup>
import { ref, defineProps, onMounted } from "vue";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

import LeftArrowYellow from "../icons/LeftArrowYellow.vue";
import RightArrowYellow from "../icons/RightArrowYellow.vue";
import NewsCarouselBox from "./NewsCarouselBox.vue";
import { mapNewsDataByCategory } from "@/api/map";
import { useCategoryStore } from "@/stores/CategoryStore";

const categoryStore = useCategoryStore();
const { title, borderColor } = defineProps(["title", "borderColor"]);

const selectedOptions = {
  type: "loop",
  perPage: 2,
  perMove: 1,
  gap: "30px",
  rewind: true,
  pagination: false,
  arrows: true,
  breakpoints: {
    630: {
      perPage: 1,
    },
  },
};

const news = ref([]);
const noImageAvailable = "src/assets/images/NoImageAvailable.jpg";

onMounted(async () => {
  try {
    const data = await mapNewsDataByCategory("general");
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
  <NewsCarouselBox :title="title" :borderColor="borderColor">
    <Splide
      :has-track="false"
      :options="selectedOptions"
      aria-label="News Carousel"
    >
      <SplideTrack>
        <SplideSlide v-for="newsItem in news" :key="newsItem.id">
          <router-link
            :to="'/article' + newsItem.id"
            @click="saveArticle(newsItem)"
          >
            <div
              class="news-carousel-two-image__image"
              :style="{
                backgroundImage: `url(${
                  newsItem.imageUrl || noImageAvailable
                })`,
              }"
            ></div>
            <h4 class="news-carousel-two-image__date">{{ newsItem.date }}</h4>
            <p class="news-carousel-two-image__title">{{ newsItem.title }}</p>
          </router-link>
        </SplideSlide>
      </SplideTrack>

      <div class="splide__arrows">
        <button class="splide__arrow splide__arrow--prev">
          <LeftArrowYellow />
        </button>
        <button class="splide__arrow splide__arrow--next">
          <RightArrowYellow />
        </button>
      </div>
    </Splide>
  </NewsCarouselBox>
</template>
