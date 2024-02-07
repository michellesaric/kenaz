<script setup>
import { ref, defineProps } from "vue";
import { useCommentsStore } from "@/stores/CommentsStore";
import { validation } from "@/utils/validation";

const props = defineProps(["commentId", "toggleModal"]);
const commentStore = useCommentsStore();
const userName = ref("");
const email = ref("");
const reply = ref("");
const message = ref("");

const handleSubmit = () => {
  message.value = validation(userName.value, email.value, reply.value);
  if (message.value === "submit") {
    commentStore.addReplyToComment(
      props.commentId,
      userName.value,
      email.value,
      reply.value
    );
    message.value = "";
    props.toggleModal();
  }
  userName.value = "";
  email.value = "";
  reply.value = "";
};
</script>

<template>
  <div class="reply-modal">
    <div class="reply-modal__title-wrapper">
      <h2 class="reply-modal__title">Enter a reply</h2>
      <img
        src="../../../assets/images/ExitIcon.jpg"
        class="reply-modal__icon"
        @click="toggleModal"
      />
    </div>

    <form class="reply-modal__form" @submit.prevent="handleSubmit">
      <label class="reply-modal__label">Enter your name please:</label>
      <input
        type="text"
        placeholder="Name"
        class="reply-modal__input"
        v-model="userName"
      />
      <label class="reply-modal__label">Enter your email:</label>
      <input
        type="text"
        placeholder="Email"
        class="reply-modal__input"
        v-model="email"
      />
      <label class="reply-modal__label">Enter your reply:</label>
      <input
        type="text"
        placeholder="Reply"
        class="reply-modal__input"
        v-model="reply"
      />
      <button class="reply-modal__submit" type="submit">Submit</button>
      <p v-if="message !== 'submit' || message !== ''" class="error-message">
        {{ message }}
      </p>
    </form>
  </div>
</template>
