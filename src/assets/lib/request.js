'use strict'

export default (url, options = {}) => {
  return fetch(url, options)
    .then(response => {
      return response.json()
    })
    .then(data => ({data}))
    .catch(err => ({err}))
}
