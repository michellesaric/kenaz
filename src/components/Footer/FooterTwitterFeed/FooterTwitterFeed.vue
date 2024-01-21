<script setup>
import TwitterLogoBlue from "../../icons/TwitterLogoBlue.vue";
</script>

<template>
  <div class="footer-twitter-feed">
    <h2 class="footer-twitter-feed__title">Twitter Feed</h2>
    <div class="footer-twitter-feed__list">
      <div
        class="footer-twitter-feed__tweet"
        v-for="tweet in tweets"
        :key="tweet.id"
      >
        <div class="footer-twitter-feed__logo-account-wrapper">
          <TwitterLogoBlue />
          <h4 class="footer-twitter-feed__tweet-account">
            {{ tweet.name }}
            <span class="account-name">{{ tweet.account }}</span>
          </h4>
        </div>
        <p class="footer-twitter-feed__tweet-text">{{ tweet.tweet }}</p>
      </div>
    </div>
  </div>
</template>

<script scoped>
import { tweets } from "./footerTwitterFeed";

export default {
  data() {
    return {
      tweets: tweets,
    };
  },
};
</script>
