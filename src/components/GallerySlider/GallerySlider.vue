<script setup>
import GallerySlide from "./GallerySlide.vue";
import { ref } from "vue";
import { galleryContent } from "./gallerySlider";
import "@splidejs/vue-splide/css";

const galleryData = ref(galleryContent);
const galleryItems = galleryData.value;

const selectedOptions = {
  rewind: true,
  pagination: false,
  arrows: true,
};
</script>

<template>
  <div class="gallery-slider">
    <Splide :options="selectedOptions" aria-label="My Favorite Images">
      <SplideSlide v-for="galleryItem in galleryItems" :key="galleryItem.id">
        <GallerySlide v-bind="galleryItem" />
      </SplideSlide>
    </Splide>
    <!-- <Splide
      :has-track="false"
      :options="selectedOptions"
      aria-label="Gallery Images"
    >
      <div class="custom-wrapper">
      <SplideTrack>
        <SplideSlide v-for="galleryItem in galleryItems" :key="galleryItem.id"
          ><GallerySlide v-bind="galleryItem"
        /></SplideSlide>
      </SplideTrack>

      <div class="splide__arrows">
        <button class="splide__arrow splide__arrow--prev">Prev</button>
        <button class="splide__arrow splide__arrow--next">Next</button>
      </div>
      </div>
    </Splide> -->
  </div>
</template>
