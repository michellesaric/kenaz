<script setup>
import LeftArrowBrown from "../../icons/LeftArrowBrown.vue";
import RightArrowBrown from "../../icons/RightArrowBrown.vue";
import NewsCarouselBox from "../NewsCarouselBox.vue";
import { ref, defineProps } from "vue";
import { newsOneImage } from "./newsOneImageCarousel";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

const newsData = ref(newsOneImage);
const news = newsData.value;

const { title, borderColor } = defineProps(["title", "borderColor"]);

const selectedOptions = {
  rewind: true,
  pagination: false,
  arrows: true,
};
</script>

<template>
  <NewsCarouselBox :title="title" :borderColor="borderColor">
    <div class="news-carousel-one-image">
      <Splide
        :has-track="false"
        :options="selectedOptions"
        aria-label="News Carousel"
      >
        <SplideTrack>
          <SplideSlide v-for="newsItem in news" :key="newsItem.id">
            <div
              class="news-carousel-one-image__image"
              :style="{ backgroundImage: 'url(' + newsItem.imgUrl + ')' }"
            ></div>
            <h4 class="news-carousel-one-image__date">{{ newsItem.date }}</h4>
            <p class="news-carousel-one-image__title">{{ newsItem.title }}</p>
          </SplideSlide>
        </SplideTrack>

        <div class="splide__arrows">
          <button class="splide__arrow splide__arrow--prev">
            <LeftArrowBrown />
          </button>
          <button class="splide__arrow splide__arrow--next">
            <RightArrowBrown />
          </button>
        </div>
      </Splide>
    </div>
  </NewsCarouselBox>
</template>
