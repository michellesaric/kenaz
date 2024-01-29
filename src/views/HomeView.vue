<script setup>
import Banner from "../components/Banner/Banner.vue";
import GallerySlider from "../components/GallerySlider/GallerySlider.vue";
import SideBarContent from "../components/SideBarContent/SideBarContent.vue";
import NewsRowLayout from "../components/NewsFeed/NewsRowLayout/NewsRowLayout.vue";
import NewsGridLayout from "../components/NewsFeed/NewsGridLayout/NewsGridLayout.vue";
import NewsTwoImageCarousel from "../components/NewsCarousel/NewsTwoImageCarousel/NewsTwoImageCarousel.vue";
import NewsOneImageCarousel from "../components/NewsCarousel/NewsOneImageCarousel/NewsOneImageCarousel.vue";
import HomeGallery from "../components/HomeGallery/HomeGallery.vue";
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
          <NewsTwoImageCarousel title="News Carousel" borderColor="#fcc44d" />
          <div class="view-carousel-container">
            <NewsOneImageCarousel title="Editorials" borderColor="#a99765" />
            <NewsOneImageCarousel title="Local News" borderColor="#a99765" />
          </div>
        </div>
        <SideBarContent />
      </div>
      <Banner />
      <HomeGallery />
    </div>
  </div>
</template>
