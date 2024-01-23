<template>
  <div
    class="splide__slide-container"
    v-for="galleryItem in galleryItems"
    :key="galleryItem.id"
  >
    <div
      class="splide__slide-image"
      :style="{ backgroundImage: 'url(' + galleryItem.imgUrl + ')' }"
    >
      <div class="splide__slide-text-content">
        <div class="splide__slide-date-comment-wrapper">
          <h4 class="splide__slide-date">{{ galleryItem.date }}</h4>
          <img
            src="../../../assets/images/CommentIcon.png"
            class="splide__slide-comment-icon"
            alt="comment icon"
          />
          <h4 class="splide__slide-comments">
            {{ galleryItem.comments }}
            {{ galleryItem.comments === 1 ? "Comment" : "Comments" }}
          </h4>
        </div>
        <p class="splide__slide-title">{{ galleryItem.title }}</p>
        <button class="splide__slide-button">Read article</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { galleryContent } from "./gallerySlider";

export default {
  setup() {
    const galleryData = ref(galleryContent);

    return {
      galleryItems: galleryData,
    };
  },
};
</script>
