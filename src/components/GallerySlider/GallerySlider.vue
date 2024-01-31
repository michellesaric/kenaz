<script setup>
import GallerySlide from "./GallerySlide.vue";
import LeftArrowGray from "../icons/LeftArrowGray.vue";
import RightArrowGray from "../icons/RightArrowGray.vue";
import { ref, onMounted } from "vue";
import { mapNewsData } from "../../api/map";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

const selectedOptions = {
  rewind: true,
  pagination: false,
  arrows: true,
};

const galleryItems = ref([]);

onMounted(async () => {
  try {
    const data = await mapNewsData();
    galleryItems.value = data;
  } catch (error) {
    console.error("Error fetching news data:", error);
  }
});
</script>

<template>
  <div class="gallery-slider">
    <Splide
      :has-track="false"
      :options="selectedOptions"
      aria-label="Gallery Images"
    >
      <SplideTrack>
        <SplideSlide v-for="galleryItem in galleryItems" :key="galleryItem.id"
          ><GallerySlide v-bind="galleryItem"
        /></SplideSlide>
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
  </div>
</template>
