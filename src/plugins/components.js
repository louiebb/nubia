// mint-ui UI
import {Button, Tabbar, TabItem} from 'mint-ui'

// 字体图标
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faList, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// 添加具体的字体图标
library.add(faHome, faList, faShoppingCart, faUser)

export default (Vue) => {
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  Vue.component(Button.name, Button)
  Vue.component(Tabbar.name, Tabbar)
  Vue.component(TabItem.name, TabItem)
}
