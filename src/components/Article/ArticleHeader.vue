<script setup>
import { computed } from "vue";
import { useCategoryStore } from "@/stores/CategoryStore";

const categoryStore = useCategoryStore();
const activeArticle = computed(() => categoryStore.currentlySavedNews);
const noImageAvailable = "src/assets/images/HomeGallery/Image1.jpeg";
</script>

<template>
  <header class="article-header">
    <figure>
      <div
        class="article-header__image"
        :style="{
          backgroundImage: `url(${activeArticle.imageUrl || noImageAvailable})`,
        }"
      >
        <div class="article-header__text-content">
          <time class="article-header__date">{{ activeArticle.date }}</time>
          <figcaption class="article-header__title">
            {{ activeArticle.title }}
          </figcaption>
        </div>
      </div>
    </figure>
  </header>
</template>
