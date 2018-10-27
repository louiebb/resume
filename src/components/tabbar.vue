<template>
  <mt-tabbar :fixed="true" class="tabbar" v-model="selected">
  <mt-tab-item :id="tab.key" :key="tab.key" v-for="tab in tabs">
    <div class="icon">
       <router-link :to="tab.link" slot="icon" tag="span" class="iconfont">
        <font-awesome-icon  :icon="tab.iconfont" />
       </router-link>
    </div>
    {{tab.value}}
  </mt-tab-item>
</mt-tabbar>
</template>

<script>
export default {
  name: 'tabbar',
  data () {
    return {
      selected: 'work',
      tabs: [
        {
          key: 'work',
          value: '工作经验',
          iconfont: 'user',
          link: '/work'
        }, {
          key: 'project',
          value: '项目经验',
          iconfont: 'user',
          link: '/project'
        }, {
          key: 'user',
          value: '我的',
          iconfont: 'user',
          link: '/user'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
