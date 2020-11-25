function M(x,y) {
  this.x = x
  this.y = y
}

console.log(M) // [Function: M]
console.log(typeof M) // function

M.prototype.add = function () {return this.x + this.y} 
M.prototype.sub = function() {return this.x - this.y}

const m = new M(1,2)
console.log(typeof m) // object

console.log(m.add()) // 3
console.log(m.sub()) // -1

console.log(M.prototype.constructor === M) // true
console.log(m.__proto__ === M.prototype) // true

class CM {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  sub() {
    return this.x - this.y
  }
}

class A extends CM {
  constructor(b, a){
    // super(b, a)
    super(a, b)
    this.b = b
    this.a = a
  }
  add() {
    return this.a + this.b
  }
}

const a = new A(1,4)

console.log(A.prototype.constructor === A) // true
console.log(a.__proto__ === A.prototype) // true


console.log(a.add())
console.log(a.sub())

