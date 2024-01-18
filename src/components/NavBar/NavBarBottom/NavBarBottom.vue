<template>
  <div class="nav-bottom__wrapper">
    <div class="nav-bottom">
      <h2
        v-for="category in categories"
        key="category"
        :class="['nav-bottom__category', category]"
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
    };
  },
};
</script>

<style lang="sass">
@import "./_navBarBottom.scss"
</style>
