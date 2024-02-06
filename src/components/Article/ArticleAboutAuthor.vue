<script setup>
import { useCategoryStore } from "@/stores/CategoryStore";
const categoryStore = useCategoryStore();

const activeArticle = categoryStore.currentlySavedNews;
console.log(activeArticle);
</script>

<template>
  <section class="article-about-author">
    <h2 class="article-about-author__title">About the Author</h2>
    <div class="article-about-author__image-description-wrapper">
      <img
        class="article-about-author__image"
        src="../../assets/images/Author.png"
      />
      <p class="article-about-author__description">
        Author/s:
        <span v-if="activeArticle.author === null">None</span>
        <span v-else>{{ activeArticle.author }}</span>
        <br />
        Source:
        <span v-if="activeArticle.source === null">None</span>
        <span v-else>{{ activeArticle.source }}</span>
      </p>
    </div>
  </section>
</template>
