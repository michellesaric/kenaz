<script setup>
import Banner from "../components/Banner/Banner.vue";
import SideBarContent from "../components/SideBarContent/SideBarContent.vue";
import GallerySlider from "../components/GallerySlider/GallerySlider.vue";
</script>

<template>
  <div class="background">
    <div><Banner /><GallerySlider /><SideBarContent /><Banner /></div>
  </div>
</template>

<style lang="sass">
@import "./_view.scss"
</style>
