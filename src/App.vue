<template>
  <div id="app">

    <e-header></e-header>

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
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import eHeader from '@/components/eheader/eHeader';
export default {
  name: 'App',
  components: {
    eHeader
  }
};
</script>

<style lang="less">
#app {
  .tab {
    display: flex;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid gray;
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
