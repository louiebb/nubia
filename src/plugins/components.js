// mint-ui UI
import {Button, Tabbar, TabItem, Header, Cell, Swipe, SwipeItem, Navbar,TabContainer,TabContainerItem} from 'mint-ui'
// 字体图标
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faList, faShoppingCart, faUser, faChevronLeft, faEquals, faShareAlt
   ,faKey,faEyeSlash,faEye,faTimes, faCaretDown,faArrowUp,faArrowDown,
   faMapMarkerAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// 添加具体的字体图标
library.add(faHome, faList, faShoppingCart, faUser, faChevronLeft, faEquals, faShareAlt
,faKey,faEyeSlash,faEye,faTimes, faCaretDown,faArrowUp,faArrowDown,faMapMarkerAlt, faChevronRight)


export default (Vue) => {
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  Vue.component(Button.name, Button)
  Vue.component(Tabbar.name, Tabbar)
  Vue.component(TabItem.name, TabItem)
  Vue.component(Header.name, Header)
  Vue.component(Cell.name, Cell)
  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)
  Vue.component(Navbar.name, Navbar)
  Vue.component(TabContainer.name, TabContainer)
  Vue.component(TabContainerItem.name, TabContainerItem)
  
}
