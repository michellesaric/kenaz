<script setup>
import Banner from "../components/Banner/Banner.vue";
import GallerySlider from "../components/GallerySlider/GallerySlider.vue";
import SideBarContent from "../components/SideBarContent/SideBarContent.vue";
import NewsArticlesByCategory from "../components/NewsArticlesByCategory/NewsArticlesByCategory.vue";
</script>

<template>
  <div class="background">
    <div class="background-center">
      <Banner />
      <GallerySlider />
      <div class="view-main-content">
        <div class="view-main-content__left">
          <NewsArticlesByCategory />
          <Banner :bannerWidth="'620px'" />
        </div>
        <SideBarContent />
      </div>
    </div>
  </div>
</template>
