<script setup>
import { ref, onMounted } from "vue";
import { mapNewsDataByCategoryAndPageSize } from "@/api/map";

const news = ref([]);

onMounted(async () => {
  try {
    const data = await mapNewsDataByCategoryAndPageSize("entertainment", 1);
    news.value = data;
  } catch (error) {
    console.error("Error fetching news data:", error);
  }
});
</script>
<template>
  <section class="side-bar-video">
    <h2 class="side-bar-video__title">Kenaz TV</h2>
    <div>
      <iframe
        class="side-bar-video__video"
        width="300"
        height="149"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=ap-rf83MrZVT7sqQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <div class="side-bar-video__text-content">
      <h4 class="side-bar-video__date">{{ news.date }}</h4>
      <p class="side-bar-video__text">
        <router-link to="/article"> {{ news.title }}</router-link>
      </p>
    </div>
  </section>
</template>
