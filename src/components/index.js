import SvgIcon from './common/SvgIcon'
// view 组件
import MyHeader from './common/header/MyHeader'
// element-ui 组件
import {Button, Carousel, CarouselItem} from 'element-ui'

// 公用组件
const components = [
  // common 组件
  SvgIcon,
  // 页面组件
  MyHeader,
  // Element-Ui组件
  Button,
  Carousel,
  CarouselItem
]

// Vue install
export default (Vue, opts = {}) => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}
