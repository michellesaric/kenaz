<template>
  <div class="footer-posts">
    <h2 class="footer-posts__title">{{ postTitle }}</h2>
    <div class="footer-posts__list">
      <div class="footer-posts__post" v-for="post in posts" :key="post.id">
        <div>
          <div class="footer-posts__post-date-comment-wrapper">
            <h4 class="footer-posts__post-date">{{ post.date }}</h4>
            <h4 class="footer-posts__post-comments">
              {{ post.comments }}
            </h4>
          </div>
          <p class="footer-posts__post-title">{{ post.title }}</p>
        </div>
        <img src="../../../assets/images/FooterImage.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { posts } from "./footerPosts";

export default {
  props: ["postTitle"],
  setup(props) {
    const postTitle = ref(props.postTitle);
    const postsData = ref(posts);

    return {
      posts: postsData,
      postTitle,
    };
  },
};
</script>
