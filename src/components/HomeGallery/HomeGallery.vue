<script setup>
import LeftArrowGray from "../icons/LeftArrowGray.vue";
import RightArrowGray from "../icons/RightArrowGray.vue";
import HomeGalleryModal from "./HomeGalleryModal.vue";

import { ref, onMounted } from "vue";
import { homeGallery } from "./homeGallery";
import { mainOptionsData, thumbnailOptionsData } from "./options";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

const homeGalleryData = ref(homeGallery);
const homeGalleryImages = homeGalleryData.value;

const main = ref();
const thumbs = ref();
const mainOptions = ref(mainOptionsData).value;
const thumbnailOptions = ref(thumbnailOptionsData).value;

let isEnlargedImage = ref(false);
let currentHomeGalleryImage = ref(null);

const changeImageSize = (homeGalleryImage) => {
  isEnlargedImage.value = !isEnlargedImage.value;
  currentHomeGalleryImage.value = homeGalleryImage.imgUrl;
};

onMounted(() => {
  const thumbsSplide = thumbs.value?.splide;

  if (thumbsSplide) {
    main.value?.sync(thumbsSplide);
  }
});
</script>

<template>
  <section class="home-gallery">
    <Splide
      class="splide-home-gallery"
      ref="main"
      :options="mainOptions"
      aria-label="Home Gallery Images"
    >
      <SplideSlide
        v-for="homeGalleryImage in homeGalleryImages"
        :key="homeGalleryImage.id"
      >
        <div
          class="home-gallery__image"
          :style="{ backgroundImage: 'url(' + homeGalleryImage.imgUrl + ')' }"
        >
          <div
            @click="() => changeImageSize(homeGalleryImage)"
            class="home-gallery__search-icon"
          ></div>
        </div>
      </SplideSlide>
    </Splide>

    <Splide
      ref="thumbs"
      :options="thumbnailOptions"
      :has-track="false"
      class="splide-thumbnail-gallery"
    >
      <SplideTrack>
        <SplideSlide
          v-for="homeGalleryImage in homeGalleryImages"
          :key="homeGalleryImage.id"
        >
          <div
            class="splide-thumbnail-gallery__thumbnail-image"
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

    <HomeGalleryModal
      v-if="isEnlargedImage"
      :imgUrl="currentHomeGalleryImage"
      :changeImageSize="changeImageSize"
    />
  </section>
</template>
