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

// getUrlParams
export function getUrlParam (name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)') // 构造一个含有目标参数的正则表达式对象
  let r = window.location.search.substr(1).match(reg) // 匹配目标参数
  if (r != null) {
    return unescape(r[2]) // 返回参数值
  } else {
    return null
  }
}
