<script setup>
import ArticleText from "./ArticleText/ArticleText.vue";
import ArticleAboutAuthor from "./ArticleAboutAuthor/ArticleAboutAuthor.vue";
import ArticleComments from "./ArticleComments/ArticleComments.vue";
import Banner from "../Banner/Banner.vue";
</script>

<template>
  <ArticleText />
  <Banner :bannerWidth="'620px'" />
  <ArticleAboutAuthor />
  <ArticleComments />
</template>

<style lang="sass">
@import "./ArticleText/_articleText.scss"
@import "./ArticleAboutAuthor/_articleAboutAuthor.scss"
@import "./ArticleComments/_articleComments.scss"
@import "./ArticleComments/ArticleComment/_articleComment.scss"
@import "./ArticleHeader/_articleHeader.scss"
</style>
