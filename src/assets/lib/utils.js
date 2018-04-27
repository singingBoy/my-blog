'use strict'

// 判断是否是微信浏览器的函数
export function isWeiXin () {
  let ua = window.navigator.userAgent.toLowerCase()
  let check = ua.match(/MicroMessenger/i)
  if (check) {
    return check[0] === 'micromessenger'
  }
  return false
}

// 判断 ios || android
export function checkSystem () {
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    return 'ios'
  } else {
    return 'android'
  }
}
