<script setup>
import Banner from "../components/Banner/Banner.vue";
import GallerySlider from "../components/GallerySlider/GallerySlider.vue";
import SideBarContent from "../components/SideBarContent/SideBarContent.vue";
import NewsRowLayout from "../components/NewsFeed/NewsRowLayout/NewsRowLayout.vue";
import NewsGridLayout from "../components/NewsFeed/NewsGridLayout/NewsGridLayout.vue";
</script>

<template>
  <div class="background">
    <div class="background-center">
      <Banner />
      <GallerySlider />
      <div class="view-main-content">
        <div class="view-main-content__left">
          <NewsRowLayout title="News" borderColor="#299ec3" />
          <NewsRowLayout title="Sport" borderColor="#84c14f" />
          <Banner
            :bannerWidth="'620px'"
            :bannerHeight="'120px'"
            :bannerMargin="'0px 0px 17px'"
          />
          <NewsGridLayout title="Business" borderColor="#ee6151" />
          <Banner
            :bannerWidth="'620px'"
            :bannerHeight="'120px'"
            :bannerMargin="'0px 0px 27px'"
          />
        </div>
        <SideBarContent />
      </div>
      <Banner />
    </div>
  </div>
</template>
