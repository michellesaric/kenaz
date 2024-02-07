<script setup>
import { ref } from "vue";
import { useCommentsStore } from "@/stores/CommentsStore";
import { validation } from "@/utils/validation";
import ArticleComment from "./ArticleComment.vue";

const commentStore = useCommentsStore();
const userName = ref("");
const email = ref("");
const comment = ref("");
const message = ref("");

const handleSubmit = () => {
  message.value = validation(userName.value, email.value, comment.value);
  if (message.value === "submit") {
    commentStore.addNewComment(userName.value, email.value, comment.value);
    message.value = "";
  }
  userName.value = "";
  email.value = "";
  comment.value = "";
};

const deleteComment = (commentId) => {
  commentStore.deleteComment(commentId);
};
</script>

<template>
  <section class="article-comments">
    <h2 class="article-comments__title">Comments</h2>
    <div class="article-comments__list">
      <p v-if="commentStore.comments.length === 0">
        There aren't any comments in here!
      </p>
      <div
        class="article-comment"
        v-for="comment in commentStore.comments"
        :key="comment.id"
      >
        <ArticleComment v-bind="comment" :deleteComment="deleteComment" />
      </div>
    </div>
    <form class="article-comments__form" @submit.prevent="handleSubmit">
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
        v-model="userName"
      />
      <input
        type="text"
        placeholder="Email Adress"
        class="article-comments__form-input"
        v-model="email"
      />
      <textarea
        type="text"
        placeholder="Comment"
        class="article-comments__form-input comment-input"
        v-model="comment"
      ></textarea>
      <button class="article-comments__form-button" type="submit">
        Submit
      </button>
      <p v-if="message !== 'submit' || message !== ''" class="error-message">
        {{ message }}
      </p>
    </form>
  </section>
</template>
