<template>
  <div class="nav-bottom__wrapper">
    <div class="nav-bottom">
      <h2
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
      </h2>
    </div>
  </div>
</template>

<script scoped>
import { categories } from "./navBarBottom";

export default {
  data() {
    return {
      categories: categories,
      activeCategory: "news",
    };
  },
  methods: {
    classClick(category) {
      this.activeCategory = category;
    },
  },
};
</script>
