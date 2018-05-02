'use strict'
import {jsonUrl} from '../../Host'
import request from '../../assets/lib/request'

//
export default {
  name: 'AllProjects',
  data () {
    return {
      projects: []
    }
  },
  created () {
    this.getAllProjects()
  },
  mounted () {
  },
  methods: {
    async getAllProjects () {
      const { data } = await request(`${jsonUrl}/productions.json`)
      this.projects = data
    }
  }
}
