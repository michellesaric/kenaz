<script setup>
import { ref } from "vue";
import { commentList } from "./articleComments.js";
import ArticleComment from "./ArticleComment/ArticleComment.vue";

const commentsData = ref(commentList);
const comments = commentsData.value;
</script>

<template>
  <div class="article-comments">
    <h2 class="article-comments__title">Comments</h2>
    <div class="article-comments__list">
      <div
        class="article-comment"
        v-for="comment in comments"
        :key="comment.id"
      >
        <ArticleComment v-bind="comment" />
      </div>
    </div>
    <ArticleComment />
    <form class="article-comments__form">
      <h2 class="article-comments__form-title">Add Your Comment</h2>
      <p class="article-comments__form-description">
        Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec
        hac ultrices nulla non netus. Placerat vehicula donec non suscipit
        egestas, augue vel suspendisse. Et felis venenatis blandit sed est
        ultrices, adipiscing urna.
      </p>
      <input
        type="text"
        placeholder="Name"
        class="article-comments__form-input"
      />
      <input
        type="text"
        placeholder="Email Adress"
        class="article-comments__form-input"
      />
      <textarea
        type="text"
        placeholder="Comment"
        class="article-comments__form-input comment-input"
      ></textarea>
      <button class="article-comments__form-button">Submit</button>
    </form>
  </div>
</template>
