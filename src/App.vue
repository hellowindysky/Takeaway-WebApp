<template>
  <div id="app">

    <e-header :seller="seller"></e-header>

    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>

    <div class="content">
      <router-view :seller="seller"></router-view>
    </div>

  </div>
</template>

<script>
import { seller } from '@/api/apprequest';

import eHeader from '@/components/eheader/eHeader';
export default {
  data() {
    return {
      seller: {}
    };
  },
  name: 'App',
  components: {
    eHeader
  },
  created() {
    seller().then((res) => {
      this.seller = Object.assign({}, res);
    }, (err) => {
      console.log(err);
    });
  },
  mounted() {
    setTimeout(() => {
      // console.log(this.seller);
    }, 0);
  }
};
</script>

<style lang="less">
#app {
  font-weight: 200;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  .tab {
    display: flex;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    .tab-item {
      flex: 1;
      text-align: center;
      >a {
        display: block;
        font-size: 14px;
        &.router-link-exact-active.router-link-active {
          color: #f01414;
        }
      }
    }
  }
}
</style>
