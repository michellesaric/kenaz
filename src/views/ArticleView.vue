<script setup>
import Banner from "../components/Banner/Banner.vue";
import SideBarContent from "../components/SideBarContent/SideBarContent.vue";
import Article from "../components/Article/Article.vue";
</script>

<template>
  <div class="background">
    <div>
      <Banner />
      <div class="view-main-content">
        <div class="view-main-content__left">
          <Article />
        </div>
        <SideBarContent />
      </div>
    </div>
  </div>
</template>
