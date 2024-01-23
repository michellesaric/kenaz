<script setup>
import SideBar from "./SideBar/SideBar.vue";
import SideBarSocial from "./SideBarSocial/SideBarSocial.vue";
import SideBarVideo from "./SideBarVideo/SideBarVideo.vue";
import SideBarBannerContainer from "./SideBarBannerContainer/SideBarBannerContainer.vue";
import SideBarFacebookFeed from "./SideBarFacebookFeed/SideBarFacebookFeed.vue";
</script>

<template>
  <div class="side-bar-content">
    <SideBar />
    <SideBarSocial />
    <SideBarVideo />
    <SideBarBannerContainer />
    <SideBarFacebookFeed />
  </div>
</template>

<style lang="sass">
@import "./_sideBarContent.scss"
@import "./SideBar/_sideBar.scss"
@import "./SideBarSocial/_sideBarSocial.scss"
@import "./SideBarVideo/_sideBarVideo.scss"
@import "./SideBarBannerContainer/_sideBarBannerContainer.scss"
@import "./SideBarFacebookFeed/_sideBarFacebookFeed.scss"
</style>
