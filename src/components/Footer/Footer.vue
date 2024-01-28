<script setup>
import FooterSocialMedia from "./FooterSocialMedia.vue";
import FooterNewsLetter from "./FooterNewsletter.vue";
import FooterTagsWidgetVue from "./FooterTagsWidget/FooterTagsWidget.vue";
import FooterPosts from "./FooterPosts/FooterPosts.vue";
import FooterTwitterFeed from "./FooterTwitterFeed/FooterTwitterFeed.vue";
</script>

<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__column">
        <FooterSocialMedia /><FooterPosts :postTitle="'Featured'" />
      </div>
      <div class="footer__column">
        <FooterNewsLetter /><FooterPosts :postTitle="'Random Posts'" />
      </div>
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
