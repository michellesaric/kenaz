<script setup>
import FooterSocialMedia from "./FooterSocialMedia/FooterSocialMedia.vue";
import FooterNewsLetter from "./FooterNewsletter/FooterNewsLetter.vue";
import FooterTagsWidgetVue from "./FooterTagsWidget/FooterTagsWidget.vue";
import FooterFeatured from "./FooterPosts/FooterFeatured.vue";
import FooterRandom from "./FooterPosts/FooterRandom.vue";
</script>

<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__column"><FooterSocialMedia /><FooterFeatured /></div>
      <div class="footer__column"><FooterNewsLetter /><FooterRandom /></div>
      <div class="footer__column"><FooterTagsWidgetVue /></div>
    </div>
  </footer>
</template>

<style lang="sass">
@import "./_footer.scss"
</style>
