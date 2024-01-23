<template>
  <div
    class="news-feed-layout"
    :style="{ borderLeft: '10px solid ' + borderColor }"
  >
    <div class="news-feed-layout__top">
      <h2 class="news-feed-layout__title">{{ title }}</h2>
      <h4 class="news-feed-layout__link">See All</h4>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewsFeedLayout",
  props: {
    title: String,
    borderColor: String,
  },
});
</script>

<style lang="sass">
@import "./NewsCardBig/_newsCardBig.scss"
@import "./NewsCardSmall/_newsCardSmall.scss"
</style>
