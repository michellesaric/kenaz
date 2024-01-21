<template>
  <div
    class="banner"
    :style="{
      width: dynamicStyles.width,
      height: dynamicStyles.height,
      margin: dynamicStyles.margin,
    }"
  >
    <p class="banner__title">banner</p>
    <p class="banner__area">
      {{ dynamicStyles.widthValue }}x{{ dynamicStyles.heightValue }}
    </p>
  </div>
</template>

<script>
import { reactive, watch } from "vue";

export default {
  props: {
    bannerWidth: {
      type: String,
      default: "940px",
    },
    bannerHeight: {
      type: String,
      default: "120px",
    },
    bannerMargin: {
      type: String,
      default: "16px 0px 18px",
    },
  },
  setup(props) {
    const dynamicStyles = reactive({
      width: props.bannerWidth,
      height: props.bannerHeight,
      margin: props.bannerMargin,
      widthValue: props.bannerWidth.replace("px", ""),
      heightValue: props.bannerHeight.replace("px", ""),
    });

    watch(() => {
      dynamicStyles.width = props.bannerWidth;
      dynamicStyles.height = props.bannerHeight;
      dynamicStyles.margin = props.bannerMargin;
      dynamicStyles.widthValue = props.bannerWidth.replace("px", "");
      dynamicStyles.heightValue = props.bannerHeight.replace("px", "");
    });

    return {
      dynamicStyles,
    };
  },
};
</script>

<style lang="sass">
@import "./_banner.scss"
</style>
