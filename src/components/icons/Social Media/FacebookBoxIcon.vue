<template>
  <svg
    :width="svgWidth"
    :height="svgHeight"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2_861)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.00092 1.00107H36.0001V36.0003H1.00092V1.00107Z"
        fill="#39599F"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.9764 9.04357H19.4499C19.4499 9.04357 15.499 8.62975 15.499 12.7413C15.499 13.6205 15.499 14.4449 15.499 14.4449H13.8918L13.8661 17.6803H15.499V26.2912H19.2449V17.6803H21.4084L21.9347 14.4449H19.2449V13.1291C19.2449 13.1291 19.0144 12.0171 20.3465 12.0171H21.9508L21.9764 9.04357Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_2_861">
        <rect width="36" height="36" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<script>
import { ref } from "vue";

export default {
  setup(props) {
    const svgWidth = ref(props.width || "36");
    const svgHeight = ref(props.height || "36");

    return {
      svgWidth,
      svgHeight,
    };
  },
  props: {
    width: {
      type: String,
      default: null,
    },
    height: {
      type: String,
      default: null,
    },
  },
};
</script>
