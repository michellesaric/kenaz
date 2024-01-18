<script setup>
import FooterSocialMedia from "./FooterSocialMedia/FooterSocialMedia.vue";
import FooterNewsLetter from "./FooterNewsletter/FooterNewsLetter.vue";
import FooterTagsWidgetVue from "./FooterTagsWidget/FooterTagsWidget.vue";
import FooterFeatured from "./FooterPosts/FooterFeatured.vue";
import FooterRandom from "./FooterPosts/FooterRandom.vue";
import FooterTwitterFeed from "./FooterTwitterFeed/footerTwitterFeed.vue";
</script>

<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__column"><FooterSocialMedia /><FooterFeatured /></div>
      <div class="footer__column"><FooterNewsLetter /><FooterRandom /></div>
      <div class="footer__column">
        <FooterTagsWidgetVue /><FooterTwitterFeed />
      </div>
    </div>
    <div class="footer-copyright">
      <div class="footer-copyright__wrapper">
        <p class="footer-copyright__text">
          © 2013 - Kenaz Template - Proudly made at Plava tvornica Croatia
        </p>
        <p class="footer-copyright__text">
          Typography - Templates - Contact Form - 404 Page
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="sass">
@import "./_footer.scss"
</style>
