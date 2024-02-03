<script setup>
import { ref, onMounted, defineProps } from "vue";
import { mapNewsDataByCategoryAndPageSize } from "@/api/map";

const props = defineProps(["postTitle"]);
const noImageAvailable = "src/assets/images/NoImageAvailable.jpg";

const posts = ref([]);

onMounted(async () => {
  try {
    const data = await mapNewsDataByCategoryAndPageSize("general", 3);
    posts.value = data;
  } catch (error) {
    console.error("Error fetching news data:", error);
  }
});
</script>

<template>
  <section class="footer-posts">
    <h2 class="footer-posts__title">{{ props.postTitle }}</h2>
    <div class="footer-posts__list">
      <router-link to="/article">
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
          <div
            class="footer-posts__post-image"
            :style="{
              backgroundImage: `url(${post.imageUrl || noImageAvailable})`,
            }"
          ></div>
        </div>
      </router-link>
    </div>
  </section>
</template>
