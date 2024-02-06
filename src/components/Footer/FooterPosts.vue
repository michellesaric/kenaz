<script setup>
import { ref, onMounted, defineProps } from "vue";
import { mapNewsDataByCategoryAndPageSize } from "@/api/map";
import { useCategoryStore } from "@/stores/CategoryStore";

const props = defineProps(["postTitle"]);
const noImageAvailable = "src/assets/images/NoImageAvailable.jpg";
const categoryStore = useCategoryStore();

const posts = ref([]);

onMounted(async () => {
  try {
    const data = await mapNewsDataByCategoryAndPageSize("general", 3);
    posts.value = data;
  } catch (error) {
    console.error("Error fetching news data:", error);
  }
});

const saveArticle = (post) => {
  categoryStore.updateNewsData(post);
};
</script>

<template>
  <section class="footer-posts">
    <h2 class="footer-posts__title">{{ props.postTitle }}</h2>
    <div class="footer-posts__list">
      <article>
        <div class="footer-posts__post" v-for="post in posts" :key="post.id">
          <div>
            <div class="footer-posts__post-date-comment-wrapper">
              <h4 class="footer-posts__post-date">{{ post.date }}</h4>
              <h4 class="footer-posts__post-comments">
                {{ post.comments }}
              </h4>
            </div>
            <router-link
              :to="'/article/' + post.id"
              @click="saveArticle(post)"
              class="footer-posts__post-title"
              >{{ post.title }}</router-link
            >
          </div>
          <div
            class="footer-posts__post-image"
            :style="{
              backgroundImage: `url(${post.imageUrl || noImageAvailable})`,
            }"
          ></div>
        </div>
      </article>
    </div>
  </section>
</template>
