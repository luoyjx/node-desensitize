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

function fixedPhone () {

}

function mobilePhone () {

}

function address () {

}

function email () {

}

function bankCard () {

}

function password () {

}

exports.chineseName = chineseName
exports.idCardNum = idCardNum
exports.fixedPhone = fixedPhone
exports.mobilePhone = mobilePhone
exports.address = address
exports.email = email
exports.bankCard = bankCard
exports.password = password
