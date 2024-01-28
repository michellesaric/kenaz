<template>
  <NewsFeedBox :title="title" :borderColor="borderColor">
    <div class="news-row">
      <div class="news-row__card" v-for="newsItem in news" :key="newsItem.id">
        <div
          class="news-row__card-image"
          :style="{ backgroundImage: 'url(' + newsItem.imgUrl + ')' }"
        ></div>
        <div class="news-row__card-date-comment-wrapper">
          <h4 class="news-row__card-date">{{ newsItem.date }}</h4>
          <h4 class="news-row__card-comments">
            {{ newsItem.comments }}
          </h4>
        </div>
        <p class="news-row__card-title">{{ newsItem.title }}</p>
      </div>
    </div>
  </NewsFeedBox>
</template>

<script>
import { defineComponent, ref } from "vue";
import NewsFeedBox from "../NewsFeedBox.vue";
import { news } from "./newsRowData";

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
