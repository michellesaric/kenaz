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
import { ref } from "vue";
import { categories } from "./navBarBottom";
import { useCategoryStore } from "../../../stores/CategoryStore";
import { useRouter } from "vue-router";

export default {
  setup() {
    const categoryStore = useCategoryStore();
    const categoriesData = ref(categories);
    const router = useRouter();

    const classClick = (category) => {
      categoryStore.updateCategory(category);
      router.push(`/${category}`);
    };

    const getLink = () => {
      return `/${categoryStore.activeCategory}`;
    };

    return {
      categories: categoriesData,
      classClick,
      getLink,
      categoryStore,
    };
  },
};
</script>
