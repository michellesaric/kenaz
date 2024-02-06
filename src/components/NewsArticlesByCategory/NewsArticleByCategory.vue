<script setup>
import { defineProps } from "vue";
import { useCategoryStore } from "@/stores/CategoryStore";

const categoryStore = useCategoryStore();

const props = defineProps({
  id: String,
  imageUrl: String,
  title: String,
  description: String,
  date: String,
  comments: Number,
  author: String,
  source: String,
  content: String,
});

const saveArticle = () => {
  categoryStore.updateNewsData(props);
};
</script>

<template>
  <p class="news-article-by-category__main-title">
    {{ props.title }}
  </p>
  <div class="news-article-by-category__date-author-comments-wrapper">
    <div class="news-article-by-category__icon-text-wrapper">
      <img src="../../assets/images/CalendarIcon.png" />
      <h4 class="news-article-by-category__date">
        {{ props.date }}
      </h4>
    </div>
    <div class="news-article-by-category__icon-text-wrapper">
      <img src="../../assets/images/CommentIcon.png" />
      <h4 class="news-article-by-category__author">
        Author:{{ props.author }}
      </h4>
    </div>
    <div class="news-article-by-category__icon-text-wrapper">
      <img src="../../assets/images/CommentIcon.png" />
      <h4 class="news-article-by-category__comments">
        {{ props.comments }}
        {{ props.comments === 1 ? "Comment" : "Comments" }}
      </h4>
    </div>
  </div>
  <div class="news-article-by-category__content">
    <div
      class="news-article-by-category__content-image"
      :style="{ backgroundImage: 'url(' + props.imageUrl + ')' }"
    ></div>
    <div class="news-article-by-category__text-content">
      <p class="news-article-by-category__text">
        {{ props.description }}
      </p>
      <button class="news-article-by-category__button">
        <router-link :to="'/article/' + props.id" @click="saveArticle"
          >Read article</router-link
        >
      </button>
    </div>
  </div>
</template>
