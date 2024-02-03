<script setup>
import SideBar from "./SideBar/SideBar.vue";
import SideBarSocial from "./SideBarSocial.vue";
import SideBarVideo from "./SideBarVideo.vue";
import SideBarBannerContainer from "./SideBarBannerContainer.vue";
import SideBarFacebookFeed from "./SideBarFacebookFeed.vue";
</script>

<template>
  <aside class="side-bar-content">
    <SideBar />
    <SideBarSocial />
    <SideBarVideo />
    <SideBarBannerContainer />
    <SideBarFacebookFeed />
  </aside>
</template>
