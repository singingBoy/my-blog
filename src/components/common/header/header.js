'use strict'
import request from '../../../assets/lib/request'
import {jsonUrl} from '../../../Host'

export default {
  name: 'myHeader',
  data () {
    return {
      keywords: '',
      articles: [],
      practices: []
    }
  },
  created () {
    // 获取文章分类列表
    this.getArticles()
    // 获取实战项目列表
    this.getPractices()
  },
  watch: {
    keywords: (value) => {
      console.log(value)
    }
  },
  mounted () {},
  methods: {
    onSearch () {
      console.log(this.keywords)
    },
    // 获取文章分类列表
    async getArticles () {
      const {data} = await request(`${jsonUrl}/articleTitles.json`)
      this.articles = data
    },
    // 获取实战项目列表
    async getPractices () {
      const {data} = await request(`${jsonUrl}/practices.json`)
      this.practices = data
    }
  }
}
