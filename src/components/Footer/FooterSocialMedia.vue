<script setup>
import Rss from "../icons/Social Media/RssBoxIcon.vue";
import Facebook from "../icons/Social Media/FacebookBoxIcon.vue";
import Twitter from "../icons/Social Media/TwitterBoxIcon.vue";
import Dribble from "../icons/Social Media/DribbleBoxIcon.vue";
import LinkedIn from "../icons/Social Media/LinkedInBoxIcon.vue";
import YouTube from "../icons/Social Media/YouTubeBoxIcon.vue";
import Skype from "../icons/Social Media/SkypeBoxIcon.vue";
</script>

<template>
  <section class="footer-social-media">
    <router-link to="/" class="footer-social-media__logo">
      <img src="../../assets/images/LogoBlue.png" />
      <h2 class="footer-social-media__logo-text">Kenaz</h2>
    </router-link>
    <p class="footer-social-media__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante.
    </p>
    <div class="footer-social-media__icons">
      <Rss />
      <Facebook />
      <Twitter />
      <Dribble />
      <LinkedIn />
      <YouTube />
      <Skype />
    </div>
  </section>
</template>
