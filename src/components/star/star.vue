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
      itemClasses: []
    };
  },
  computed: {
    starType() {
      return 'star-' + this.size;
    }
  }
};
</script>

<style lang="less">

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
      &.on {
        // .bg-image('star48_on@2x.png', 'star48_on@3x.png');
      }
    }
  }
  &.star-36 {
    
  }
  &.star-24 {
    
  }
}
</style>
