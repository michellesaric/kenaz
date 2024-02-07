<script setup>
import { ref } from "vue";
import { useCommentsStore } from "@/stores/CommentsStore";
import { validation } from "@/utils/validation";

const commentStore = useCommentsStore();
const userName = ref("");
const email = ref("");
const reply = ref("");
const message = ref("");

const handleSubmit = () => {
  message.value = validation(userName.value, email.value, reply.value);
  if (message.value === "submit") {
    commentStore.addNewComment(userName.value, email.value, reply.value);
    message.value = "";
  }
  userName.value = "";
  email.value = "";
  reply.value = "";
};
</script>

<template>
  <div class="reply-modal">
    <h2>Enter a reply</h2>
    <label>Enter your name please:</label>
    <input
      type="text"
      placeholder="Name"
      class="article-comments__form-input"
    />
    <label>Enter your email:</label>
    <input
      type="text"
      placeholder="Name"
      class="article-comments__form-input"
    />
    <label>Enter your reply:</label>
    <input
      type="text"
      placeholder="Name"
      class="article-comments__form-input"
    />
  </div>
</template>
