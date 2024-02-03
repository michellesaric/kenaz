<script setup>
import { defineProps } from "vue";

const props = defineProps({
  id: String,
  imageUrl: String,
  title: String,
  date: String,
  comments: Number,
  author: String,
  source: String,
  sourceDescription: String,
  content: String,
});

const noImageAvailable = "src/assets/images/NoImageAvailable.jpg";
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
  <div
    class="side-bar__item-image"
    :style="{
      backgroundImage: `url(${props.imageUrl || noImageAvailable})`,
    }"
  ></div>
</template>
