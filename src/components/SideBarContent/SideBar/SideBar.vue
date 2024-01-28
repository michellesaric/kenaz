<script setup>
import { sideBarContent } from "./sideBar";
import { ref } from "vue";
import SideBarItem from "./SideBarItem.vue";

const links = ["Popular", "Top Rated", "Comments"];
const selectedLink = ref(links[0]);
const sideBarItems = ref(sideBarContent).value;

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
      <div
        class="side-bar__item"
        v-for="sideBarItem in sideBarItems"
        :key="sideBarItem.id"
      >
        <SideBarItem v-bind="sideBarItem" />
      </div>
    </div>
  </div>
</template>
