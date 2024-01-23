<template>
  <NewsFeedLayout :title="title" :borderColor="borderColor">
    <div class="news-card-big">
      <div
        class="news-card-big__card"
        v-for="newsItem in news"
        :key="newsItem.id"
      >
        <div
          class="news-card-big__card-image"
          :style="{ backgroundImage: 'url(' + newsItem.imgUrl + ')' }"
        ></div>
        <div class="news-card-big__card-date-comment-wrapper">
          <h4 class="news-card-big__card-date">{{ newsItem.date }}</h4>
          <h4 class="news-card-big__card-comments">
            {{ newsItem.comments }}
          </h4>
        </div>
        <p class="news-card-big__card-title">{{ newsItem.title }}</p>
      </div>
    </div>
  </NewsFeedLayout>
</template>

<script>
import { defineComponent, ref } from "vue";
import NewsFeedLayout from "../NewsFeedLayout.vue";
import { news } from "./newsCardData";

export default defineComponent({
  components: {
    NewsFeedLayout,
  },
  props: {
    title: String,
    borderColor: String,
  },
  setup() {
    const newsData = ref(news);

    return {
      news: newsData,
    };
  },
});
</script>
