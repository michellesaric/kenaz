<template>
  <div class="footer-tags-widget">
    <h2 class="footer-tags-widget__title">Tags Widget</h2>

    <div class="footer-tags-widget__tags">
      <h4 class="footer-tags-widget__tag" v-for="tag in tags" :key="tags.id">
        {{ tag.tag }}
      </h4>
    </div>
  </div>
</template>

<script scoped>
import { tags } from "./footerTagsWidget";

export default {
  data() {
    return {
      tags: tags,
    };
  },
};
</script>
