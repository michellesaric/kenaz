<script setup>
import NavBar from "./components/NavBar/NavBar.vue";
import Footer from "./components/Footer/Footer.vue";
</script>

<template>
  <NavBar />
  <router-view></router-view>
  <Footer />
</template>

<style lang="sass">
@import "./main.scss"
</style>
