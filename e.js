const a = JSON.stringify(`console.log('abc')`)
console.log(a)
const aFn = new Function(a)
// console.log(aFn)
aFn()
aFn()
