<script setup>
import { useCategoryStore } from "@/stores/CategoryStore";

const categoryStore = useCategoryStore();
const activeArticle = categoryStore.currentlySavedNews;
const noImageAvailable = "src/assets/images/HomeGallery/Image1.jpeg";
</script>

<template>
  <article class="article-text">
    <div class="article-text__wrapper">
      <p class="article-text__text-upper-text">
        {{
          activeArticle.description === null
            ? "No description was provided"
            : activeArticle.description
        }}
      </p>
    </div>
    <div
      class="article-text__image"
      :style="{
        backgroundImage: `url(${activeArticle.imageUrl || noImageAvailable})`,
      }"
    ></div>
    <div class="article-text__text-social-wrapper">
      <p class="article-text__text-lower-text">
        {{
          activeArticle.content === null
            ? "No content was provided"
            : activeArticle.content
        }}
      </p>
      <img
        class="article-text__social-image"
        src="../../assets/images/ArticleSocialMedia.png"
      />
    </div>
  </article>
</template>
