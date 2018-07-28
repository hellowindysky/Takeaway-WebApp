<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      classMap: ['decrease', 'discount', 'guarantee', 'invioce', 'special']
    };
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

.header {
  color: #fff;
  background-color: rgba(7, 17, 27, 0.5);
  .content-wrapper {
    position: relative;
    padding: 24px 12px 18px 24px;
    font-size: 0;
    .avatar {
      display: inline-block;
      vertical-align: top;
      img {
        border-radius: 2px;
      }
    }
    .content {
      display: inline-block;
      font-size: 14px;
      margin-left: 16px;
      .title {
        margin: 2px 0 8px 0;
        .brand {
          display: inline-block;
          width: 30px;
          height: 18px;
          .bg-image("brand@2x.png", "brand@3x.png");
          // @media screen and (min-width: 768px) and (max-width: 989px) {
          //   .bg-image("brand@2x.png");
          // }
          background-size: 30px 18px;
          background-repeat: no-repeat;
          vertical-align: top;
        }
        .name {
          margin-left: 6px;
          font-size: 16px;
          line-height: 18px;
          font-weight: bold;
        }
      }
      .description {
        margin-bottom: 10px;
        line-height: 12px;
        font-size: 12px;
      }
      .support {
        .icon {
          display: inline-block;
          vertical-align: middle;
          width: 12px;
          height: 12px;
          margin-right: 4px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          &.decrease {
            .bg-image('decrease_1@2x.png', 'decrease_1@3x.png');
          }
          &.discount {
            .bg-image('discount_1@2x.png', 'discount_1@3x.png');
          }
          &.guarantee {
            .bg-image('guarantee_1@2x.png', 'guarantee_1@3x.png');
          }
          &.invioce {
            .bg-image('invoice_1@2x.png', 'invoice_1@3x.png');
          }
          &.special {
            .bg-image('special_1@2x.png', 'special_1@3x.png');
          }
        }
        .text {
          line-height: 12px;
          font-size: 10px;
        }
      }
    }
    .support-count {
      position: absolute;
      right: 12px;
      bottom: 14px;
      padding: 0 8px;
      height: 24px;
      line-height: 24px;
      border-radius: 14px;
      background-color: rgba(0,0,0,0.2);
      text-align: center;
      .count {
        vertical-align: top;
        font-size: 10px;
      }
      .icon-keyboard_arrow_right {
        margin-left: 2px;
        line-height: 24px;
        font-size: 10px;
      }
    }
  }
}
</style>
