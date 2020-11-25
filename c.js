var person = {
  fullName: function() {
      // return this.firstName + " " + this.lastName;
      console.log(arguments)
      console.log(this)
      console.log(this.firstName + " " + this.lastName)
  }
}
var person1 = {
  firstName: "Bill",
  lastName: "Gates",
}
person.fullName.apply(person1, [1,2,3]);  // 将返回 "Bill Gates"
person.fullName.call(person1, [1,2,3])