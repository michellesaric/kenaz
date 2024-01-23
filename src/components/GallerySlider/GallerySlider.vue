<script setup>
import "@splidejs/vue-splide/css";
import GallerySlide from "./GallerySlide/GallerySlide.vue";
const selectedOptions = {
  rewind: true,
  pagination: false,
};
</script>

<template>
  <Splide :options="selectedOptions" aria-label="My Favorite Images">
    <SplideSlide>
      <GallerySlide />
    </SplideSlide>
  </Splide>
</template>

<style lang="sass">
@import "./GallerySlide/_gallerySlide.scss"
</style>
