import VideoPlayer from '../../components/VideoPlayer'
import HelloWorld from '../../components/HelloWorld'
// import MyHeader from '../../components/common/header/MyHeader'

const localComponent = {
  template: '<div>我是局部组件,使用const申明</div>'
}

export default {
  name: 'App',
  components: { VideoPlayer, localComponent, HelloWorld }
}
