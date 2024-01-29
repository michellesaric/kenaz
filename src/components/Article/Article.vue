<script setup>
import ArticleText from "./ArticleText.vue";
import ArticleAboutAuthor from "./ArticleAboutAuthor.vue";
import ArticleComments from "./ArticleComments/ArticleComments.vue";
import Banner from "../Banner/Banner.vue";
</script>

<template>
  <ArticleText />
  <Banner :bannerWidth="'620px'" />
  <ArticleAboutAuthor />
  <ArticleComments />
</template>
