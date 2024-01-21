<template>
  <div class="side-bar-video">
    <h2 class="side-bar-video__title">Kenaz TV</h2>
    <div>
      <iframe
        width="300"
        height="149"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=ap-rf83MrZVT7sqQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <div class="side-bar-video__text-content">
      <h4 class="side-bar-video__date">August 26, 2013</h4>
      <p class="side-bar-video__text">
        <span class="NASA">NASA</span> releases portrait of a planet waving at
        Saturn
      </p>
    </div>
  </div>
</template>

<!-- <script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const youtubeVideoId = dQw4w9WgXcQ;
    const youtubeVideo = ref(null);
    onMounted(() => {
      console.log(youtubeVideo.value);
    });

    const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;

    return {
      youtubeEmbedUrl,
      youtubeVideo,
    };
  },
};
</script> -->
