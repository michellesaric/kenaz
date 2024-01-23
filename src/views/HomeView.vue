<script setup>
import Banner from "../components/Banner/Banner.vue";
import SideBarContent from "../components/SideBarContent/SideBarContent.vue";
import NewsCardBig from "../components/NewsFeed/NewsCardBig/NewsCardBig.vue";
import NewsCardSmall from "../components/NewsFeed/NewsCardSmall/NewsCardSmall.vue";
</script>

<template>
  <div class="background">
    <div>
      <Banner />
      <div class="view-main-content">
        <div class="view-main-content__left">
          <NewsCardBig title="News" borderColor="#299ec3" />
          <NewsCardBig title="Sport" borderColor="#84c14f" />
          <Banner
            :bannerWidth="'620px'"
            :bannerHeight="'120px'"
            :bannerMargin="'0px 0px 17px'"
          />
          <NewsCardSmall title="Business" borderColor="#ee6151" />
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
