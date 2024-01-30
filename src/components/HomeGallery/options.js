export const mainOptionsData = {
  type: "fade",
  heightRatio: 0.5,
  pagination: false,
  arrows: false,
  cover: true,
};

export const thumbnailOptionsData = {
  rewind: true,
  fixedWidth: 120,
  fixedHeight: 120,
  isNavigation: true,
  gap: 10,
  focus: "center",
  pagination: false,
  cover: false,
  dragMinThreshold: {
    mouse: 4,
    touch: 10,
  },
  breakpoints: {
    990: {
      fixedWidth: 60,
      fixedHeight: 60,
      gap: 10,
    },
  },
};
