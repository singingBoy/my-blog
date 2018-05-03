'use strict'
import {jsonUrl} from '../../Host'
import request from '../../assets/lib/request'

//
export default {
  name: 'AllProjects',
  data () {
    return {
      imgIndex: 0, // 轮播第几张
      projects: []
    }
  },
  created () {
    this.getAllProjects()
  },
  mounted () {
  },
  computed: {
    bgUrl () {
      return this.projects[this.imgIndex] && this.projects[this.imgIndex].img
    }
  },
  methods: {
    /* 轮播图改变 */
    imgChange (index) {
      this.imgIndex = index
    },
    /* 获取项目列表 */
    async getAllProjects () {
      const { data } = await request(`${jsonUrl}/productions.json`)
      this.projects = data
    }
  }
}
