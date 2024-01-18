<script setup>
import FooterSocialMedia from "./FooterSocialMedia/FooterSocialMedia.vue";
import FooterNewsLetter from "./FooterNewsletter/FooterNewsLetter.vue";
</script>

<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__column"><FooterSocialMedia /></div>
      <div class="footer__column"><FooterNewsLetter /></div>
      <div class="footer__column"></div>
    </div>
  </footer>
</template>

<style lang="sass">
@import "./_footer.scss"
</style>
