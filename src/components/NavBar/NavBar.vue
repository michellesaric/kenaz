<script setup>
import NavBarTop from "./NavBarTop/NavBarTop.vue";
import NavBarBottom from "./NavBarBottom/NavBarBottom.vue";
</script>

<template>
  <nav>
    <NavBarTop />
    <NavBarBottom />
  </nav>
</template>

<style lang="sass">
@import "./NavBarTop/_navBarTop.scss"
@import ./NavBarBottom/_navBarBottom.scss"
</style>
