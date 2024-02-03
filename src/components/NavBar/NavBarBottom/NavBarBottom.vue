<template>
  <div class="nav-bottom__wrapper">
    <router-link to="/category" class="nav-bottom">
      <a
        v-for="category in categories"
        :key="category"
        @click="classClick(category)"
        :class="[
          'nav-bottom__category',
          category,
          { active: activeCategory === category },
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

export default {
  setup() {
    const categoriesData = ref(categories);
    const activeCategory = ref("news");

    const classClick = (category) => {
      activeCategory.value = category;
    };

    return {
      categories: categoriesData,
      activeCategory,
      classClick,
    };
  },
};
</script>
