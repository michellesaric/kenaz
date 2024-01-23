<template>
  <div
    class="news-article-by-category"
    v-for="newsByCategoryItem in newsByCategory"
    :key="newsByCategoryItem.id"
  >
    <p class="news-article-by-category__main-title">
      {{ newsByCategoryItem.title }}
    </p>
    <div class="news-article-by-category__date-author-comments-wrapper">
      <img src="../../../assets/images/CalendarIcon.png" />
      <h4 class="news-article-by-category__date">
        {{ newsByCategoryItem.date }}
      </h4>
      <img src="../../../assets/images/CommentIcon.png" />
      <h4 class="news-article-by-category__author">
        Author:{{ newsByCategoryItem.author }}
      </h4>
      <img src="../../../assets/images/CommentIcon.png" />
      <h4 class="news-article-by-category__comments">
        {{ newsByCategoryItem.comments }}
        {{ newsByCategoryItem.comments === 1 ? "Comment" : "Comments" }}
      </h4>
    </div>
    <div class="news-article-by-category__content">
      <div
        class="news-article-by-category__content-image"
        :style="{ backgroundImage: 'url(' + newsByCategoryItem.imgUrl + ')' }"
      ></div>
      <div class="news-article-by-category__text-content">
        <p class="news-article-by-category__text">
          {{ newsByCategoryItem.description }}
        </p>
        <button class="news-article-by-category__button">Read article</button>
      </div>
    </div>
  </div>
</template>

<script>
import { newsByCategory } from "./newsArticlesByCategory";
import { ref } from "vue";

export default {
  setup() {
    const newsByCategoryData = ref(newsByCategory);

    return {
      newsByCategory: newsByCategoryData,
    };
  },
};
</script>
