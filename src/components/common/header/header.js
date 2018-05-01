'use strict'
export default {
  name: 'myHeader',
  data () {
    return {
      keywords: ''
    }
  },
  watch: {
    keywords: (value) => {
      console.log(value)
    }
  },
  methods: {
    onSearch () {
      console.log(this.keywords)
    }
  }
}
