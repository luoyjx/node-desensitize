'use strict'

const desensitize = require('..')

console.log(desensitize.chineseName('李小龙'))
console.log(desensitize.chineseName('陈粒'))
console.log(desensitize.chineseName('欧阳映雪'))

console.log(desensitize.idCardNum('421202199107261234'))
console.log(desensitize.idCardNum('422111192232131'))
