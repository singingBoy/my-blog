import SvgIcon from './common/SvgIcon'
//
import MyHeader from './common/header/MyHeader'

// 公用组件
const components = [
  // common 组件
  SvgIcon,
  // 页面组件
  MyHeader
]

// Vue install
export default (Vue, opts = {}) => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}
