<template>
  <div class="circle-loading-container" :style="`--circle-color: ${defaultStyle.circleColor}`">
    <div v-html="svg.circleLoading"></div>
  </div>
</template>

<script>
export default {
  name: "CircleLoading",
  props: ['styleConfig'],
  data() {
    return {
      svg: {
        circleLoading: `<svg t="1681219501155" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2658" width="200" height="200"><path d="M508 294.8c-21.5 0-39-17.5-39-39V105.5c0-21.5 17.5-39 39-39s39 17.5 39 39v150.3c0 21.5-17.5 39-39 39zM380.4 330.2c-13.5 0-26.6-7-33.8-19.5l-75.1-130.1c-10.8-18.7-4.4-42.5 14.3-53.3 18.7-10.8 42.5-4.4 53.3 14.3l75.1 130.1c10.8 18.7 4.4 42.5-14.3 53.3-6.2 3.5-12.9 5.2-19.5 5.2zM287.5 424.7c-6.6 0-13.3-1.7-19.5-5.2l-130.1-75.1c-18.7-10.8-25-34.6-14.3-53.3 10.8-18.7 34.6-25 53.3-14.3L307 351.9c18.7 10.8 25 34.6 14.3 53.3-7.2 12.5-20.3 19.5-33.8 19.5zM254.5 552.9H104.2c-21.5 0-39-17.5-39-39s17.5-39 39-39h150.3c21.5 0 39 17.5 39 39s-17.5 39-39 39zM159.8 755.6c-13.5 0-26.6-7-33.8-19.5-10.8-18.7-4.4-42.5 14.3-53.3l130.1-75.1c18.7-10.8 42.5-4.4 53.3 14.3 10.8 18.7 4.4 42.5-14.3 53.3l-130.1 75.1c-6.2 3.5-12.9 5.2-19.5 5.2zM309.2 903.4c-6.6 0-13.3-1.7-19.5-5.2-18.7-10.8-25-34.6-14.3-53.3l75.1-130.1c10.8-18.7 34.6-25 53.3-14.3 18.7 10.8 25 34.6 14.3 53.3L343 883.9c-7.2 12.5-20.3 19.5-33.8 19.5zM512.6 956.6c-21.5 0-39-17.5-39-39V767.4c0-21.5 17.5-39 39-39s39 17.5 39 39v150.3c0 21.5-17.5 38.9-39 38.9zM715.3 901.1c-13.5 0-26.6-7-33.8-19.5l-75.1-130.1c-10.8-18.7-4.4-42.5 14.3-53.3 18.7-10.8 42.5-4.4 53.3 14.3l75.1 130.1c10.8 18.7 4.4 42.5-14.3 53.3-6.1 3.5-12.9 5.2-19.5 5.2zM863 751.6c-6.6 0-13.3-1.7-19.5-5.2l-130.1-75.1c-18.7-10.8-25-34.6-14.3-53.3 10.8-18.7 34.6-25 53.3-14.3l130.1 75.1c18.7 10.8 25 34.6 14.3 53.3-7.2 12.5-20.3 19.5-33.8 19.5zM916.3 548.3H766.1c-21.5 0-39-17.5-39-39s17.5-39 39-39h150.3c21.5 0 39 17.5 39 39s-17.5 39-39.1 39zM730.7 420.7c-13.5 0-26.6-7-33.8-19.5-10.8-18.7-4.4-42.5 14.3-53.3l130.1-75.1c18.7-10.8 42.5-4.4 53.3 14.3 10.8 18.7 4.4 42.5-14.3 53.3l-130.1 75.1c-6.2 3.5-12.9 5.2-19.5 5.2zM636.1 327.9c-6.6 0-13.3-1.7-19.5-5.2-18.7-10.8-25-34.6-14.3-53.3l75.1-130.1c10.8-18.7 34.6-25 53.3-14.3 18.7 10.8 25 34.6 14.3 53.3l-75.1 130.1c-7.2 12.5-20.3 19.5-33.8 19.5z" fill="" p-id="2659"></path></svg>`,
      },
      defaultStyle: {
        circleColor: "#fff",
      }
    }
  },
  beforeMount() {
    this.modifyLoadingCircleStyle();
  },
  methods: {
    // 修改样式
    modifyLoadingCircleStyle() {
      if(this.styleConfig) {
        this.modifySrcObject(this.defaultStyle, this.styleConfig);
      }
    },
  },
  beforeDestroy() {
  }
}
</script>

<style scoped>
.circle-loading-container {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 100;
  width: 100%;
  height: 100%;
  --circle-color: "";
}

.circle-loading-container /deep/ svg {
  width: 100px;
  height: 100px;
  fill: var(--circle-color);
}

.circle-loading-container > div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.circle-loading-container > div /deep/ svg {
  animation: loading 3s linear infinite;
}

@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>