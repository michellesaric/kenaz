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
  <div
    class="splide__slide-image"
    :style="{ backgroundImage: 'url(' + props.imageUrl + ')' }"
  >
    <div class="splide__slide-text-content">
      <div class="splide__slide-date-comment-wrapper">
        <h4 class="splide__slide-date">{{ props.date }}</h4>
        <img
          src="../../assets/images/CommentIcon.png"
          class="splide__slide-comment-icon"
          alt="comment icon"
        />
        <h4 class="splide__slide-comments">
          {{ props.comments }}
          {{ props.comments === 1 ? "Comment" : "Comments" }}
        </h4>
      </div>
      <p class="splide__slide-title">{{ props.title }}</p>
      <button class="splide__slide-button">
        <router-link :to="'/article/' + props.id" @click="saveArticle"
          >Read article</router-link
        >
      </button>
    </div>
  </div>
</template>
