<script setup>
import FacebookIcon from "../icons/Social Media/FacebookBoxIcon.vue";
import TwitterIcon from "../icons/Social Media/TwitterBoxIcon.vue";
import YouTubeIcon from "../icons/Social Media/YouTubeBoxIcon.vue";
</script>

<template>
  <div class="side-bar-social">
    <h2 class="side-bar-social__title">Social</h2>
    <div class="side-bar-social__item">
      <FacebookIcon :width="'43'" :height="'43'" />
      <button class="side-bar-social__item-text">Like</button>
      <h3 class="side-bar-social__item-following">25041 Fans</h3>
    </div>
    <div class="side-bar-social__item">
      <TwitterIcon :width="'43'" :height="'43'" />
      <button class="side-bar-social__item-text">Follow</button>
      <h3 class="side-bar-social__item-following">25041 Followers</h3>
    </div>
    <div class="side-bar-social__item">
      <YouTubeIcon :width="'43'" :height="'43'" />
      <button class="side-bar-social__item-text">Subscribe</button>
      <h3 class="side-bar-social__item-following">941 Subscribers</h3>
    </div>
  </div>
</template>
