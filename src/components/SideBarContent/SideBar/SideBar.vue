<script setup>
import { ref } from "vue";
import SideBarItem from "./SideBarItem/SideBarItem.vue";

const links = ["Popular", "Top Rated", "Comments"];
const selectedLink = ref(links[0]);

const selectLink = (link) => {
  selectedLink.value = link;
};
</script>

<template>
  <div class="side-bar">
    <div class="side-bar__top">
      <h3
        v-for="link in links"
        :key="link"
        :class="{ 'side-bar__top-link': true, active: selectedLink === link }"
        @click="selectLink(link)"
      >
        {{ link }}
      </h3>
    </div>
    <div class="side-bar__list">
      <SideBarItem />
    </div>
  </div>
</template>
