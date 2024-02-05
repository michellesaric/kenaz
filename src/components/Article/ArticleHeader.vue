<script setup>
import { ref, computed, onMounted, inject } from "vue";
import { useRoute } from "vue-router";

// const route = useRoute();
// const articles = inject("articles", ref([]));

// const articleId = computed(() => route.params.id);

// const selectedArticle = computed(() => {
//   return articles.value.find((article) => article.id === articleId.value);
// });

// console.log(articles);
</script>

<template>
  <header class="article-header">
    <figure>
      <div
        class="article-header__image"
       
      >
        <div class="article-header__text-content">
          <time class="article-header__date">august, 26 2013</time>
          <figcaption class="article-header__title">
            yayayayayayayaya
          </figcaption>
        </div>
      </div>
    </figure>
  </header>
</template>
