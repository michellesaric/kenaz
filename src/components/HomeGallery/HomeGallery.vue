<script setup>
import LeftArrowGray from "../icons/LeftArrowGray.vue";
import RightArrowGray from "../icons/RightArrowGray.vue";

import { ref } from "vue";
import { homeGallery } from "./homeGallery";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

const homeGalleryData = ref(homeGallery);
const homeGalleryImages = homeGalleryData.value;
let isEnlargedImage = false;

const mainSliderRef = ref(null);
const thumbnailSliderRef = ref(null);

const syncSliders = () => {
  if (mainSliderRef.value && thumbnailSliderRef.value) {
    mainSliderRef.value.$splide.sync(thumbnailSliderRef.value.$splide);
  }
};

const changeImageSize = () => {
  isEnlargedImage = !isEnlargedImage;
};

const mainOptions = {
  type: "fade",
  heightRatio: 0.5,
  pagination: false,
  arrows: false,
  cover: true,
};

const thumbnailOptions = {
  rewind: true,
  fixedWidth: 120,
  fixedHeight: 120,
  isNavigation: true,
  gap: 10,
  focus: "center",
  pagination: false,
  cover: true,
  dragMinThreshold: {
    mouse: 4,
    touch: 10,
  },
  breakpoints: {
    990: {
      fixedWidth: 60,
      fixedHeight: 60,
      gap: 10,
    },
  },
};
</script>

<template>
  <div class="home-gallery">
    <Splide
      class="splide-home-gallery"
      ref="mainSliderRef"
      :has-track="false"
      :options="mainOptions"
      aria-label="Home Gallery Images"
      @mounted="syncSliders"
    >
      <SplideTrack>
        <SplideSlide
          v-for="homeGalleryImage in homeGalleryImages"
          :key="homeGalleryImage.id"
        >
          <div
            :class="{
              'home-gallery__image': !isEnlargedImage,
              'home-gallery__enlarged-image': isEnlargedImage,
            }"
            :style="{ backgroundImage: 'url(' + homeGalleryImage.imgUrl + ')' }"
          >
            <img
              :src="{
                'src/assets/images/SearchIcon.png': !isEnlargedImage,
                'src/assets/images/ExitIcon.png': isEnlargedImage,
              }"
              :class="{
                'home-gallery__search-icon': !isEnlargedImage,
                'home-gallery__exit-icon': isEnlargedImage,
              }"
              @click="changeImageSize"
            />
          </div>
        </SplideSlide>
      </SplideTrack>

      <Splide
        ref="thumbnailSliderRef"
        :options="thumbnailOptions"
        :has-track="false"
        class="splide-thumbnail"
      >
        <SplideTrack>
          <SplideSlide
            v-for="homeGalleryImage in homeGalleryImages"
            :key="homeGalleryImage.id"
          >
            <div
              class="home-gallery__thumbnail-image"
              :style="{
                backgroundImage: 'url(' + homeGalleryImage.imgUrl + ')',
              }"
            ></div>
          </SplideSlide>
        </SplideTrack>

        <div class="splide__arrows">
          <button class="splide__arrow splide__arrow--prev">
            <LeftArrowGray />
          </button>
          <button class="splide__arrow splide__arrow--next">
            <RightArrowGray />
          </button>
        </div>
      </Splide>
    </Splide>
  </div>
</template>
