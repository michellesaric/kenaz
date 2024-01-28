<script setup>
import { defineProps } from "vue";

const props = defineProps({
  id: Number,
  imgUrl: String,
  userName: String,
  dateTime: String,
  comment: String,
});
</script>

<template>
  <img class="article-comment__image" :src="props.imgUrl" />
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
      <h4 class="article-comment__link">Reply</h4>
    </div>
    <p class="article-comment__text">{{ props.comment }}</p>
  </div>
</template>
