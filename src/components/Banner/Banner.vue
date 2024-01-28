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
import { reactive, watch, onMounted, onBeforeUnmount } from "vue";

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

    const updateWidth = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 990 && screenWidth >= 630) {
        dynamicStyles.width = "623px";
        dynamicStyles.widthValue = "623";
      } else if (screenWidth <= 630) {
        dynamicStyles.width = "303px";
        dynamicStyles.widthValue = "303";
        dynamicStyles.height = "90px";
        dynamicStyles.widthHeight = "90";
        dynamicStyles.margin = "8px 0px";
      } else {
        dynamicStyles.width = props.bannerWidth;
      }
    };

    onMounted(() => {
      updateWidth();
      window.addEventListener("resize", updateWidth);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", updateWidth);
    });

    watch(
      [
        () => props.bannerWidth,
        () => props.bannerHeight,
        () => props.bannerMargin,
      ],
      () => {
        dynamicStyles.width = props.bannerWidth;
        dynamicStyles.height = props.bannerHeight;
        dynamicStyles.margin = props.bannerMargin;
        dynamicStyles.widthValue = props.bannerWidth.replace("px", "");
        dynamicStyles.heightValue = props.bannerHeight.replace("px", "");
      }
    );

    return {
      dynamicStyles,
    };
  },
};
</script>
