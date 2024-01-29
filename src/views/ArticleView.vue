<script setup>
import Banner from "../components/Banner/Banner.vue";
import SideBarContent from "../components/SideBarContent/SideBarContent.vue";
import Article from "../components/Article/Article.vue";
import ArticleHeader from "../components/Article/ArticleHeader.vue";
</script>

<template>
  <div class="background">
    <div class="background-center">
      <Banner />
      <ArticleHeader />
      <div class="view-main-content">
        <div class="view-main-content__left">
          <Article />
        </div>
        <SideBarContent />
      </div>
    </div>
  </div>
</template>
