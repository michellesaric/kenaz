<template>
  <div class="footer-tags-widget">
    <h2 class="footer-tags-widget__title">Tags Widget</h2>

    <div class="footer-tags-widget__tags">
      <h4 class="footer-tags-widget__tag" v-for="tag in tags" :key="tag.id">
        {{ tag.tag }}
      </h4>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { tags } from "./footerTagsWidget";

export default {
  setup() {
    const tagsData = ref(tags);

    return {
      tags: tagsData,
    };
  },
};
</script>
