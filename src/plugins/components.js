/*
 * @Author: louiebb
 * @Date: 2018-10-27 17:28:13
 * @Last Modified by: louiebb
 * @Last Modified time: 2018-10-27 19:09:52
 */

// mint-ui UI
// import {Button, Tabbar, TabItem, Header, Cell, Swipe, SwipeItem} from 'mint-ui'
// 字体图标
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// 添加具体的字体图标
library.add(faUser)
export default (Vue) => {
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  // Vue.component(Button.name, Button)
  // Vue.component(Tabbar.name, Tabbar)
  // Vue.component(TabItem.name, TabItem)
  // Vue.component(Header.name, Header)
  // Vue.component(Cell.name, Cell)
  // Vue.component(Swipe.name, Swipe)
  // Vue.component(SwipeItem.name, SwipeItem)
}
