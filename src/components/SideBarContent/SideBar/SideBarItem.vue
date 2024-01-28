<script setup>
import { defineProps } from "vue";

const props = defineProps({
  id: Number,
  comments: Number,
  date: String,
  title: String,
});
</script>

<template>
  <div class="side-bar__item-text-content">
    <div class="side-bar__item-icon-comment-wrapper">
      <img src="../../../assets/images/CommentIcon.png" />
      <h4 class="side-bar__item-comments">{{ props.comments }}</h4>
    </div>
    <h4 class="side-bar__item-date">{{ props.date }}</h4>
    <p class="side-bar__item-title">{{ props.title }}</p>
  </div>
  <img
    class="side-bar__item-image"
    src="../../../assets/images/SideBarImage.png"
  />
</template>
