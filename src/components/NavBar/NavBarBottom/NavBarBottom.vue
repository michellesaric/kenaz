<template>
  <div class="nav-bottom__wrapper">
    <router-link :to="getLink()" class="nav-bottom">
      <a
        v-for="category in categories"
        :key="category"
        @click="classClick(category)"
        :class="[
          'nav-bottom__category',
          category,
          { active: categoryStore.activeCategory === category },
        ]"
      >
        {{ category }}
      </a>
    </router-link>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { categories } from "./navBarBottom";
import { useCategoryStore } from "../../../stores/CategoryStore";
import router from "@/router/index";

export default {
  setup() {
    const categoryStore = useCategoryStore();
    const categoriesData = ref(categories);

    const classClick = (category) => {
      categoryStore.updateCategory(category);
    };

    const getLink = () => {
      return `/${categoryStore.activeCategory}`;
    };

    const unwatch = watch(
      () => categoryStore.activeCategory,
      (newCategory, oldCategory) => {
        if (newCategory !== oldCategory) {
          router.push(`/${newCategory}`);
        }
      }
    );

    return {
      categories: categoriesData,
      classClick,
      getLink,
      categoryStore,
      unwatch,
    };
  },
};
</script>
