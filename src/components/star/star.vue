<template>
  <div class="star" :class="starType">
    <span class="star-item"
     v-for="(itemClass,index) in itemClasses"
     :key="index"
     :class="itemClass">
    </span>

  </div>
</template>

<script>
const LENGTH = 5;
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off';

export default {
  props: {
    size: {
      type: Number,
      default: 0
    },
    score: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
    };
  },
  computed: {
    starType() {
      return 'star-' + this.size;
    },
    itemClasses() {
      let result = [];
      let score = Math.floor(this.score * 2) / 2;
      let hasDecimal = score % 1 !== 0;
      let integer = Math.floor(score);
      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON);
      }
      if (hasDecimal) {
        result.push(CLS_HALF);
      }
      while (result.length < LENGTH) {
        result.push(CLS_OFF);
      }
      return result;
    }
  }
};
</script>

<style lang="less">
.bg-image(@url2, @url3) {
  background-image: url(@url2);
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
    background-image: url(@url3);
  }
}

.star {
  font-size: 0;
  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }
  &.star-48 {
    .star-item {
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        .bg-image('star48_on@2x.png', 'star48_on@3x.png');
      }
      &.half {
        .bg-image('star48_half@2x.png', 'star48_half@3x.png');
      }
      &.off {
        .bg-image('star48_off@2x.png', 'star48_off@3x.png');
      }
    }
  }
  &.star-36 {
    .star-item {
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        .bg-image('star36_on@2x.png', 'star36_on@3x.png');
      }
      &.half {
        .bg-image('star36_half@2x.png', 'star36_half@3x.png');
      }
      &.off {
        .bg-image('star36_off@2x.png', 'star36_off@3x.png');
      }
    }
  }
  &.star-24 {
    .star-item {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        .bg-image('star24_on@2x.png', 'star24_on@3x.png');
      }
      &.half {
        .bg-image('star24_half@2x.png', 'star24_half@3x.png');
      }
      &.off {
        .bg-image('star24_off@2x.png', 'star24_off@3x.png');
      }
    }
  }
}
</style>
