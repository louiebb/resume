<template>
  <div id="app">
    <keep-alive>
    <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
    <tab-bar/>

  </div>
</template>

<script>
import TabBar from '@/components/tabbar'
export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style lang="scss">
/* 重置样式 */
@import 'normalize.css';
@import url('./style/common.scss');
// @import 'mint-ui/lib/style.css';
// #app {

// }
</style>
