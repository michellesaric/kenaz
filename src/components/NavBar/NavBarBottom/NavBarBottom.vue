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
import { ref, computed } from "vue";
import { categories } from "./navBarBottom";
import { useCategoryStore } from "../../../stores/CategoryStore";
import { categoryRename } from "../../../utils/categoryRename";

export default {
  setup() {
    const categoryStore = useCategoryStore();
    const categoriesData = ref(categories);

    const activeCategory = computed(() =>
      categoryRename(categoryStore.category)
    );

    const classClick = (category) => {
      categoryStore.updateCategory(categoryRename(category));
    };

    return {
      categories: categoriesData,
      activeCategory,
      classClick,
    };
  },
};
</script>
