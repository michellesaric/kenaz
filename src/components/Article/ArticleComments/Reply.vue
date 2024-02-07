<script setup>
import { defineProps } from "vue";

const props = defineProps({
  id: Number,
  userName: String,
  email: String,
  dateTime: String,
  reply: String,
  deleteReply: Function,
});
</script>

<template>
  <div class="reply">
    <img src="../../../assets/images/UserAvatar.png" class="reply__image" />
    <div class="reply__text-content">
      <div class="reply__name-date-icon-wrapper">
        <div class="reply__name-date-wrapper">
          <h3 class="reply__name">{{ props.userName }}</h3>
          <time class="reply__date">{{ props.dateTime }}</time>
        </div>
        <img
          src="../../../assets/images/ExitIcon.jpg"
          @click="deleteReply(props.id)"
          class="reply__icon"
        />
      </div>
      <p class="reply__text">{{ props.reply }}</p>
    </div>
  </div>
</template>
