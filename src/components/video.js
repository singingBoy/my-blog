'use strict'
import * as Utils from '../assets/lib/utils'

// 竖放视频：https://v.suv666.com/test/material/6a51588d802807be0993216537c29859.mp4
// 正常视频：https://v.suv666.com/material/d5025707035da6d363afc9d248e28b22.mp4
/**
 * @example:
  <video-player
    source="https://v.suv666.com/material/d5025707035da6d363afc9d248e28b22.mp4"
    min-height="14rem">
 </video-player>
***/

export default {
  name: 'Video',
  data () {
    console.log(Utils.isWeiXin())
    console.log(Utils.checkSystem())
    return {
      isWeiXin: Utils.isWeiXin(),
      isIos: Utils.checkSystem() === 'ios'
    }
  },
  props: {
    source: {
      type: String,
      required: true
    },
    minHeight: {
      type: String,
      default: '5rem'
    }

  },
  mounted () {
    this.$nextTick(() => {
      this.limitHeight()
      if (this.isIos) {
        this.limitHeight()
      } else {
        if (this.isWeiXin) {
          this.setWxAttribute()
        } else {
          this.limitHeight()
        }
      }
    })
  },
  methods: {
    limitHeight () {
      const videoBox = document.getElementById('videoBox')
      videoBox.style.height = this.minHeight
    },
    setWxAttribute () {
      const videoPlayer = document.getElementById('videoPlayer')
      videoPlayer.setAttribute('x5-video-player-type', 'h5')
    }
  }
}
