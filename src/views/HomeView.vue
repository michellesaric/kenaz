<script setup>
import Banner from "../components/Banner/Banner.vue";
import SideBarContent from "../components/SideBarContent/SideBarContent.vue";
</script>

<template>
  <div class="background">
    <div><Banner /><SideBarContent /><Banner /></div>
  </div>
</template>

<style lang="sass">
@import "./_view.scss"
</style>
