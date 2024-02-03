<template>
  <section
    class="news-carousel-box"
    :style="{ borderLeft: '10px solid ' + borderColor }"
  >
    <h2 class="news-carousel-box__title">{{ title }}</h2>
    <slot></slot>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewsCarouselBox",
  props: {
    title: String,
    borderColor: String,
  },
});
</script>
