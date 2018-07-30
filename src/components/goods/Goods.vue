<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="(item,index) in goods"
         :key="index"
         class="menu-item">
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper"></div>
  </div>
</template>

<script>
import { goods } from '@/api/apprequest';

export default {
  props: {
    seller: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      goods: [],
      classMap: ['decrease', 'discount', 'guarantee', 'invioce', 'special']
    };
  },
  created() {
    goods().then((res) => {
      this.goods = Object.assign({}, res);
    }, (err) => {
      console.log(err);
    });
  },
  mounted() {
    setTimeout(() => {
      console.log(this.goods);
    }, 1000);
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

.goods {
  display: flex;
  position: absolute;
  top: 174px;
  bottom: 46px;
  width: 100%;
  overflow: hidden;
  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background-color: #f3f5f7;
    .menu-item {
      display: table;
      height: 54px;
      width: 56px;
      padding: 0 12px;
      line-height: 14px;
      &.current {
        position: relative;
        z-index: 10;
        margin-top: -1px;
        background: #fff;
        font-weight: 700;
        .text {
          // border-none()
        }
      }
      .icon {
        display: inline-block;
        vertical-align: top;
        width: 12px;
        height: 12px;
        margin-right: 2px;
        background-size: 12px 12px;
        background-repeat: no-repeat;
        &.decrease {
          .bg-image('decrease_3@2x.png', 'decrease_3@3x.png');
        }
        &.discount {
          .bg-image('discount_3@2x.png', 'discount_3@3x.png');
        }
        &.guarantee {
          .bg-image('guarantee_3@2x.png', 'guarantee_3@3x.png');
        }
        &.invoice {
          .bg-image('invoice_3@2x.png', 'invoice_3@3x.png');
        }
        &.special {
          .bg-image('special_3@2x.png', 'special_3@3x.png');
        }
      }
      .text {
        display: table-cell;
        width: 56px;
        vertical-align: middle;
        // border-1px(rgba(7, 17, 27, 0.1))
        &.border-1px {
          border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        }
        font-size: 12px;
      }
    }
  }
  .foods-wrapper {
    flex: 1;
    .title {
      padding-left: 14px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      color: rgb(147, 153, 159);
      background: #f3f5f7;
    }
    .food-item {
      display: flex;
      margin: 18px;
      padding-bottom: 18px;
      // border-1px(rgba(7, 17, 27, 0.1))
      &:last-child {
        // border-none()
        margin-bottom: 0;
      }
      .icon {
        flex: 0 0 57px;
        margin-right: 10px;
      }
      .content {
        flex: 1;
        .name {
          margin: 2px 0 8px 0;
          height: 14px;
          line-height: 14px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }
        .desc,.extra {
          line-height: 10px;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
        .desc {
          line-height: 12px;
          margin-bottom: 8px;
        }
        .extra {
          .count {
            margin-right: 12px;
          }
        }
        .price {
          font-weight: 700;
          line-height: 24px;
          .now {
            margin-right: 8px;
            font-size: 14px;
            color: rgb(240, 20, 20);
          }
          .old {
            text-decoration: line-through;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
        }
        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          bottom: 12px;
        }
      }
    }
  }
}
</style>
