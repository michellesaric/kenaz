<template>
  <div
    class="news-feed-layout"
    :style="{ borderLeft: '10px solid ' + borderColor }"
  >
    <div class="news-feed-layout__top">
      <h2 class="news-feed-layout__title">{{ title }}</h2>
      <router-link
        to="/category"
        class="news-feed-layout__link"
        @click="changeCategory"
        >See All</router-link
      >
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useCategoryStore } from "@/stores/CategoryStore";
import { categoryRename } from "@/utils/categoryRename";

export default defineComponent({
  name: "NewsFeedBox",
  props: {
    title: String,
    borderColor: String,
  },
  setup(props) {
    const categoryStore = useCategoryStore();

    const changeCategory = () => {
      categoryStore.updateCategory(categoryRename(props.title));
    };

    return {
      changeCategory,
    };
  },
});
</script>
