<template>
  <div
    class="news-feed-layout"
    :style="{ borderLeft: '10px solid ' + borderColor }"
  >
    <div class="news-feed-layout__top">
      <h2 class="news-feed-layout__title">{{ title }}</h2>
      <router-link :to="getLink()" class="news-feed-layout__link"
        ><a @click="changeCategory">See All</a></router-link
      >
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useCategoryStore } from "@/stores/CategoryStore";

export default defineComponent({
  name: "NewsFeedBox",
  props: {
    title: String,
    borderColor: String,
  },
  setup(props) {
    const categoryStore = useCategoryStore();

    const changeCategory = () => {
      categoryStore.updateCategory(props.title.toLocaleLowerCase());
    };

    const getLink = () => {
      return `/${categoryStore.activeCategory}`;
    };

    return {
      changeCategory,
      getLink,
    };
  },
});
</script>
