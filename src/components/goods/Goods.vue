<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li class="menu-item" v-for="(item,index) in goods" :key="index"
         :class="{ 'current': currentIndex===index }"
         @click="selectMenu(index, $event)">
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li class="food-list food-list-hook" v-for="(item,index) in goods" :key="index">
          <h1 class="title">
            {{item.name}}
          </h1>
          <ul>
            <li class="food-item border-1px" v-for="(food, subIndex) in item.foods" :key="subIndex">
              <div class="icon">
                <img :src="food.icon">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shop-cart :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shop-cart>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import { goods } from '@/api/apprequest';

import shopCart from 'components/shopcart/shopCart';

export default {
  props: {
    seller: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    shopCart
  },
  data() {
    return {
      goods: [],
      classMap: ['decrease', 'discount', 'guarantee', 'invioce', 'special'],
      listHeight: [],
      scrollY: 0
    };
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      return 0;
    }
  },
  methods: {
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      });
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        probeType: 3
      });
      this.foodsScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    _calculateHeight() {
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },
    selectMenu(index, e) {
      if (!e._constructed) {
        return;
      }
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
      let el = foodList[index];
      this.foodsScroll.scrollToElement(el, 300);
    }
  },
  created() {
    goods().then((res) => {
      this.goods = Object.assign([], res);
      this.$nextTick(() => {
        this._initScroll();
        this._calculateHeight();
      });
    }, (err) => {
      console.log(err);
    });
  },
  mounted() {
    setTimeout(() => {
      // console.log(this.goods);
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
      &.border-1px {
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      }
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
