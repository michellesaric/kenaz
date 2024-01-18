<script setup>
import FooterSocialMedia from "./FooterSocialMedia/FooterSocialMedia.vue";
import FooterNewsLetter from "./FooterNewsletter/FooterNewsLetter.vue";
import FooterTagsWidgetVue from "./FooterTagsWidget/FooterTagsWidget.vue";
</script>

<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__column"><FooterSocialMedia /></div>
      <div class="footer__column"><FooterNewsLetter /></div>
      <div class="footer__column"><FooterTagsWidgetVue /></div>
    </div>
  </footer>
</template>

<style lang="sass">
@import "./_footer.scss"
</style>
