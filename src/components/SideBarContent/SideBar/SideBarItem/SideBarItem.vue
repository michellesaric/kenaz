<template>
  <div
    class="side-bar__item"
    v-for="sideBarItem in sideBarItems"
    :key="sideBarItem.id"
  >
    <div class="side-bar__item-text-content">
      <div class="side-bar__item-icon-comment-wrapper">
        <img src="../../../../assets/images/CommentIcon.png" />
        <h4 class="side-bar__item-comments">{{ sideBarItem.comments }}</h4>
      </div>
      <h4 class="side-bar__item-date">{{ sideBarItem.date }}</h4>
      <p class="side-bar__item-title">{{ sideBarItem.title }}</p>
    </div>
    <img
      class="side-bar__item-image"
      src="../../../../assets/images/SideBarImage.png"
    />
  </div>
</template>

<script>
import { sideBarContent } from "./sideBar";
import { ref } from "vue";

export default {
  setup() {
    const sideBarItems = ref(sideBarContent);

    return {
      sideBarItems,
    };
  },
};
</script>
