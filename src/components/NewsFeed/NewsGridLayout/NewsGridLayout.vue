<template>
  <NewsFeedBox :title="title" :borderColor="borderColor">
    <div class="news-card-small">
      <router-link
        to="/article"
        class="news-card-small__card"
        v-for="newsItem in news"
        :key="newsItem.id"
      >
        <div
          class="news-card-small__card-image"
          :style="{ backgroundImage: 'url(' + newsItem.imgUrl + ')' }"
        ></div>
        <div class="news-card-small__card-date-title-wrapper">
          <h4 class="news-card-small__card-date">{{ newsItem.date }}</h4>
          <p class="news-card-small__card-title">{{ newsItem.title }}</p>
        </div>
      </router-link>
    </div>
  </NewsFeedBox>
</template>

<script>
import { defineComponent, ref } from "vue";
import NewsFeedBox from "../NewsFeedBox.vue";
import { news } from "./newsGridData";

export default defineComponent({
  components: {
    NewsFeedBox,
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
