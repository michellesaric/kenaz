<script setup>
import CommentIcon from "../../icons/CommentIcon.vue";
</script>

<template>
  <div class="side-bar">
    <div class="side-bar__top">
      <h3 class="side-bar__top-link">Popular</h3>
      <h3 class="side-bar__top-link">Top Rated</h3>
      <h3 class="side-bar__top-link">Comments</h3>
    </div>
    <div class="side-bar__list">
      <div
        class="side-bar__item"
        v-for="sideBarItem in sideBarItems"
        :key="sideBarItem.id"
      >
        <div class="side-bar__item-text-content">
          <div class="side-bar__item-icon-comment-wrapper">
            <CommentIcon />
            <h4 class="side-bar__item-comments">{{ sideBarItem.comments }}</h4>
          </div>
          <h4 class="side-bar__item-date">{{ sideBarItem.date }}</h4>
          <p class="side-bar__item-title">{{ sideBarItem.title }}</p>
        </div>
        <img
          class="side-bar__item-image"
          src="../../../assets/images/SideBarImage.png"
        />
      </div>
    </div>
  </div>
</template>

<script scoped>
import { sideBarContent } from "./sideBar.js";

export default {
  data() {
    return {
      sideBarItems: sideBarContent,
    };
  },
};
</script>
