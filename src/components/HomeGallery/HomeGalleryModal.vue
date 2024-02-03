<script setup>
import { defineProps } from "vue";

const props = defineProps(["imgUrl", "changeImageSize"]);
</script>

<template>
  <div class="home-gallery-modal">
    <div
      class="home-gallery-modal__image"
      :style="{ backgroundImage: 'url(' + props.imgUrl + ')' }"
    >
      <div @click="changeImageSize" class="home-gallery-modal__exit-icon"></div>
    </div>
  </div>
</template>
