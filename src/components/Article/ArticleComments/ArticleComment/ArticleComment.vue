<template>
  <div class="article-comment">
    <div
      class="article-comment__comment"
      v-for="comment in comments"
      :key="comment.id"
    >
      <img class="article-comment__comment-image" :src="comment.imgUrl" />
      <div class="article-comment__comment-text-content">
        <div class="article-comment__comment-name-date-link-wrapper">
          <div class="article-comment__comment-name-date-wrapper">
            <h3 class="article-comment__comment-name">
              {{ comment.userName }}
            </h3>
            <h3 class="article-comment__comment-date">
              {{ comment.dateTime }}
            </h3>
          </div>
          <h4 class="article-comment__comment-link">Reply</h4>
        </div>
        <p class="article-comment__comment-text">{{ comment.comment }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { comments } from "./aricleComments";

export default {
  setup() {
    const commentsData = ref(comments);

    return {
      comments: commentsData,
    };
  },
};
</script>
