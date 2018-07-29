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
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img width="100%" height="180%" :src="seller.avatar">
    </div>
    <div v-show="detailShow" class="detail">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
        </div>
      </div>
      <div class="detai-close">
        <i class="icon-close"></i>
      </div>
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
      detailShow: false,
      classMap: ['decrease', 'discount', 'guarantee', 'invioce', 'special']
    };
  },
  methods: {
    showDetail() {
      this.detailShow = true;
    }
  }
};
</script>

<style lang="less">
@import "~styles/variables.less";
.bg-image(@url2, @url3) {
  background-image: url(@url2);
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
    background-image: url(@url3);
  }
}

.clearfix {
  display: inline-block;
  &:after {
    display: block;
    content: ".";
    height: 0;
    line-height: 0;
    clear: both;
    visibility: hidden;
  }
}

.header {
  color: #fff;
  background-color: rgba(7, 17, 27, 0.5);
  position: relative;
  overflow: hidden;
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
  .bulletin-wrapper {
    // font-size: 0;会影响文字省略号，所以不用
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: rgba(7,17,27,0.2);
    .bulletin-title {
      display: inline-block;
      vertical-align: middle;
      width: 22px;
      height: 12px;
      .bg-image('bulletin@2x.png', 'bulletin@3x.png');
      background-size: cover;
      background-repeat: no-repeat;
    }
    .bulletin-text {
      vertical-align: middle;
      margin: 0 4px;
      font-size: 10px;
    }
    .icon-keyboard_arrow_right {
      position: absolute;
      right: 12px;
      top: 8px;
      font-size: 10px;
    }
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    filter: blur(10px);
    overflow: hidden;
  }
  .detail {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(7,17,27,0.8);
    .detail-wrapper {
      min-height: 100%;
      width: 100%;
      .detail-main {
        margin-top: 64px;
        padding-bottom: 64px;
        .name {
          line-height: 16px;
          text-align: center;
          font-size: 16px;
          font-weight: 700;
        }
      }
    }
    .detai-close {
      position: relative;
      width: 32px;
      height: 32px;
      margin: -64px auto 0 auto;
      font-size: 32px;
    }
  }
}
</style>
