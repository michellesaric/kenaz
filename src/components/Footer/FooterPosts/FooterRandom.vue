<template>
  <div class="footer-posts">
    <h2 class="footer-posts__title">Random Posts</h2>
    <div class="footer-posts__list">
      <div
        class="footer-posts__post"
        v-for="randomPost in randomPosts"
        key="featuredPost.id"
      >
        <div>
          <div class="footer-posts__post-date-comment-wrapper">
            <h4 class="footer-posts__post-date">{{ randomPost.date }}</h4>
            <h4 class="footer-posts__post-comments">
              {{ randomPost.comments }}
            </h4>
          </div>
          <p class="footer-posts__post-title">{{ randomPost.title }}</p>
        </div>
        <img src="../../../assets/images/FooterImage.png" />
      </div>
    </div>
  </div>
</template>

<script scoped>
import { posts } from "./footerPosts";

export default {
  data() {
    return {
      randomPosts: posts,
    };
  },
};
</script>

<style lang="sass">
@import "./_footerPosts.scss"
</style>
