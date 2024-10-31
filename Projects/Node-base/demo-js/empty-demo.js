const obj1 = {}
const obj2 = { message: 'Not Empty' }
console.log(Object.keys(obj1).length === 0) // length = 0: true
console.log(Object.keys(obj2).length === 0) // length = 1: false

const num = 1
console.log(Object.keys(num).length === 0) // length = 0: true -> 즉, 숫자는 객체가 아니다

// 문자열도 객체입니다!!
const str1 = 'one'
const str2 = ''
console.log(Object.keys(str1).length === 0) // length = 0: false
console.log(Object.keys(str2).length === 0) // length = 0: true

console.log(Object.keys(str1)) // [ '0', '1', '2' ]
console.log(Object.keys(str1).length) // 3

function isEmpty(obj) {
    if (obj.constructor === Object) {
        return Object.keys(obj).length === 0
    }
    return false
}

console.log(isEmpty(obj1)) // true