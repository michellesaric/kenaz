<script setup>
import NavBar from "./components/NavBar/NavBar.vue";
import Footer from "./components/Footer/Footer.vue";
</script>

<template>
  <NavBar v-if="!$route.meta.hideNavBar" />
  <router-view></router-view>
  <Footer v-if="!$route.meta.hideFooter" />
</template>

<style lang="sass">
@import "./main.scss"
</style>
