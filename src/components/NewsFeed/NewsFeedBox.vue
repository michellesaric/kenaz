<template>
  <div
    class="news-feed-layout"
    :style="{ borderLeft: '10px solid ' + borderColor }"
  >
    <div class="news-feed-layout__top">
      <h2 class="news-feed-layout__title">{{ title }}</h2>
      <router-link to="/category" class="news-feed-layout__link"
        >See All</router-link
      >
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewsFeedBox",
  props: {
    title: String,
    borderColor: String,
  },
});
</script>
