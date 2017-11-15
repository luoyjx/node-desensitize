'use strict'

/**
 * 【中文姓名】只显示第一个汉字，其他隐藏为2个星号，比如：李**
 * @param {String} fullName 中文全名
 */
function chineseName (fullName) {
  if (!fullName) return ''

  return fullName.slice(0, 1) + fullName.slice(1).replace(/\S/g, '*')
}

/**
 * 【身份证号】显示最后四位，其他隐藏。共计18位或者15位
 * 比如：*************1234
 * @param {String} id 身份证号码
 */
function idCardNum (id) {
  if (!id) return ''

  if (typeof id === 'number') {
    id = String(id)
  }

  id = id.slice(0, -4).replace(/\S/g, '*') + id.slice(-4)

  return id
}

/**
 * 【固定电话】 显示后四位，其他隐藏，比如：*******3241
 * @param {String} phone
 */
function fixedPhone (phone) {
  if (!phone) return ''

  if (typeof phone === 'number') {
    phone = String(phone)
  }

  phone = phone.slice(0, -4).replace(/\S/g, '*') + phone.slice(-4)

  return phone
}

/**
 * 【手机号码】前三位，后四位，其他隐藏，比如：135****6810
 * @param {String} phone
 */
function mobilePhone (phone) {
  if (!phone) return ''

  if (typeof phone === 'number') {
    phone = String(phone)
  }

  phone = phone.slice(0, 3) +
    phone.slice(3, -4).replace(/\S/g, '*') +
    phone.slice(-4)

  return phone
}

/**
 * 【地址】只显示到地区，不显示详细地址，比如：上海徐汇区漕河泾开发区***
 * @param {String} address
 * @param {Number} sensitiveSize
 */
function address (address, sensitiveSize) {
  if (!address) return ''

  if (typeof sensitiveSize === 'string') {
    sensitiveSize = Number(sensitiveSize)
  }

  return address.slice(0, sensitiveSize) +
    address.slice(sensitiveSize).replace(/\S/g, '*')
}

/**
 * 【电子邮箱】 邮箱前缀仅显示第一个字母，前缀其他隐藏，
 * 用星号代替，@及后面的地址显示，比如：d**@126.com
 * @param {String} email
 */
function email (email) {
  if (!email) return ''

  const atIndex = email.indexOf('@')

  if (atIndex === -1) return email

  return email.slice(0, 1) +
    email.slice(1, atIndex).replace(/\S/g, '*') +
    email.slice(atIndex)
}

/**
 * 【银行卡号】前六位，后四位，其他用星号隐藏每位1个星号，
 * 比如：6222600**********1234
 * @param {String} carNumber
 */
function bankCard (carNumber) {
  if (!carNumber) return ''

  return carNumber.slice(0, 6) +
    carNumber.slice(6, -4).replace(/\S/g, '*') +
    carNumber.slice(-4)
}

/**
 * 密码
 * @param {String} pwd
 */
function password (pwd) {
  if (!pwd) return ''

  return pwd.replace(/\S/g, '*')
}

exports.chineseName = chineseName
exports.idCardNum = idCardNum
exports.fixedPhone = fixedPhone
exports.mobilePhone = mobilePhone
exports.address = address
exports.email = email
exports.bankCard = bankCard
exports.password = password
