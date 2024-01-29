<script setup>
import LogoWhite from "../icons/LogoWhite.vue";
import SearchIcon from "../icons/SearchIconSmall.vue";
</script>

<template>
  <div class="nav-top__wrapper">
    <div class="nav-top">
      <router-link to="/" class="nav-top__logo">
        <div class="nav-top__logo-icon">
          <LogoWhite />
        </div>
        <h2 class="nav-top__logo-text">Kenaz</h2>
      </router-link>
      <div class="nav-top__links">
        <h3 class="nav-top__links-text">Media</h3>
        <h3 class="nav-top__links-text">Marketing</h3>
        <h3 class="nav-top__links-text">Contact</h3>
        <div class="nav-top__links-search-icon">
          <SearchIcon />
        </div>
      </div>
    </div>
  </div>
</template>
