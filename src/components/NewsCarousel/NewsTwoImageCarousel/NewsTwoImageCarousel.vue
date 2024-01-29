<script setup>
import LeftArrowYellow from "../../icons/LeftArrowYellow.vue";
import RightArrowYellow from "../../icons/RightArrowYellow.vue";
import NewsCarouselBox from "../NewsCarouselBox.vue";
import { ref, defineProps } from "vue";
import { newsTwoImage } from "./newsTwoImageCarousel";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

const newsData = ref(newsTwoImage);
const news = newsData.value;

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
          <div
            class="news-carousel-two-image__image"
            :style="{ backgroundImage: 'url(' + newsItem.imgUrl + ')' }"
          ></div>
          <h4 class="news-carousel-two-image__date">{{ newsItem.date }}</h4>
          <p class="news-carousel-two-image__title">{{ newsItem.title }}</p>
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
