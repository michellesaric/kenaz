<script setup>
import {
  onMounted,
  onBeforeUnmount,
  ref,
  defineProps,
  getCurrentInstance,
} from "vue";

const props = defineProps({
  options: {
    type: Object,
    default: () => ({
      root: null,
      threshold: "0",
    }),
  },
});

const instance = getCurrentInstance();
const observer = ref(null);

const handleIntersect = (entry) => {
  if (entry.isIntersecting) {
    instance.emit("triggerIntersected");
  }
};

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    handleIntersect(entries[0]);
  }, props.options);
});

onBeforeUnmount(() => {
  observer.value.disconnect();
});
</script>

<template>
  <span ref="trigger" />
</template>
