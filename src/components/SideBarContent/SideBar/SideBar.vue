<script setup>
import { ref, onMounted } from "vue";
import { mapNewsDataByCategoryAndPageNumber } from "@/api/map";
import Trigger from "./Trigger.vue";
import SideBarItem from "./SideBarItem.vue";
import { useCategoryStore } from "@/stores/CategoryStore";

const categoryStore = useCategoryStore();
const links = ["Popular", "Top Rated", "Comments"];
const selectedLink = ref(links[0]);
let page = 1;

const selectLink = (link) => {
  selectedLink.value = link;
};

const sideBarItems = ref([]);

const loadMore = async () => {
  page += 1;
  const data = await mapNewsDataByCategoryAndPageNumber("general", page);
  sideBarItems.value = data;
};

const saveArticle = (newsItem) => {
  categoryStore.updateNewsData(newsItem);
};
</script>

<template>
  <section class="side-bar">
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
      <router-link
        :to="'/article/' + sideBarItem.id"
        class="side-bar__item"
        @click="saveArticle(sideBarItem)"
        v-for="sideBarItem in sideBarItems"
        :key="sideBarItem.id"
      >
        <SideBarItem v-bind="sideBarItem" />
      </router-link>
      <Trigger @triggerIntersected="loadMore" />
    </div>
  </section>
</template>
