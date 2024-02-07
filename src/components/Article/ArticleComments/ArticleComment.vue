<script setup>
import { ref, defineProps } from "vue";
import ReplyModal from "./ReplyModal.vue";
import Reply from "./Reply.vue";
import { useCommentsStore } from "@/stores/CommentsStore";

let isReplyModalOpen = ref(false);
const id = ref(null);
const commentsStore = useCommentsStore();

const props = defineProps({
  id: Number,
  userName: String,
  email: String,
  dateTime: String,
  comment: String,
  replies: Array,
  deleteComment: Function,
});

const toggleModal = (commentId) => {
  isReplyModalOpen.value = !isReplyModalOpen.value;
  id.value = commentId;
};

const deleteReply = (commentId, replyId) => {
  commentsStore.deleteReplyToComment(commentId, replyId);
};
</script>

<template>
  <img
    class="article-comment__image"
    src="../../../assets/images/UserAvatar.png"
  />
  <div class="article-comment__text-content">
    <div class="article-comment__name-date-link-wrapper">
      <div class="article-comment__name-date-wrapper">
        <h3 class="article-comment__name">
          {{ props.userName }}
        </h3>
        <h3 class="article-comment__date">
          {{ props.dateTime }}
        </h3>
      </div>
      <div class="article-comment__link-icon-wrapper">
        <h4 class="article-comment__link" @click="toggleModal(props.id)">
          Reply
        </h4>
        <img
          src="../../../assets/images/ExitIcon.jpg"
          class="article-comment__delete-icon"
          @click="deleteComment(props.id)"
        />
      </div>
    </div>
    <p class="article-comment__text">{{ props.comment }}</p>
    <div
      v-if="props.replies.length !== 0"
      v-for="reply in props.replies"
      :key="reply.id"
    >
      <Reply
        v-bind="reply"
        :deleteReply="() => deleteReply(props.id, reply.id)"
      />
    </div>
    <ReplyModal
      v-if="isReplyModalOpen"
      :commentId="id"
      :toggleModal="toggleModal"
    />
  </div>
</template>
