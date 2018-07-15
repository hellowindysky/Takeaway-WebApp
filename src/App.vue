<template>
  <div id="app">

    <e-header></e-header>

    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
    </div>

    <div class="content">
      I am content!
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
    .tab-item {
      flex: 1;
      text-align: center;
    }
  }
}
</style>
