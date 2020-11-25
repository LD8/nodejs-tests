const a = {a:'aaa', b:'bbb', c: 'ccc'}
const b = Object.create(a)
for (key of Object.keys(a)){
  Object.defineProperty(b, key, {
    value: a[key],
    configurable: true,
    enumerable: true
  })
}

const o2A = (obj) => {
  const keys = Object.keys(obj)
  let ln = keys.length
  const newArr = new Array(ln)
  while (ln--) {
    newArr[ln] = obj[keys[ln]]
  }
  console.log(newArr)

  for (const key in obj) {
    console.log(key)
  }

}

o2A(b)