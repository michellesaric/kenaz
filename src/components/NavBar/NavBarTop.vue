<script setup>
import LogoWhite from "../icons/LogoWhite.vue";
import SearchIcon from "../icons/SearchIconSmall.vue";
import { useCategoryStore } from "@/stores/CategoryStore";

const categoryStore = useCategoryStore();

const getLink = () => {
  categoryStore.updateCategory("news");
  return "/";
};
</script>

<template>
  <div class="nav-top__wrapper">
    <div class="nav-top">
      <router-link :to="getLink()" class="nav-top__logo">
        <div class="nav-top__logo-icon">
          <LogoWhite />
        </div>
        <h2 class="nav-top__logo-text">Kenaz</h2>
      </router-link>
      <div class="nav-top__links">
        <a class="nav-top__links-text">Media</a>
        <a class="nav-top__links-text">Marketing</a>
        <a class="nav-top__links-text">Contact</a>
        <div class="nav-top__links-search-icon">
          <SearchIcon />
        </div>
      </div>
    </div>
  </div>
</template>
