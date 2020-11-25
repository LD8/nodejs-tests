/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

class Vue {
  
}

function initUse(Vue){
  Vue.use = function (plugin) {
    console.log('this: ', this) // [Function: Vue] { use: [Function] }
    console.log('arguments: ', arguments) // [Arguments] { '0': 1, '1': 2, '2': 3 }
    console.log('typeof arguments: ', typeof arguments) // object
    const args = toArray(arguments, 1)
    console.log('args: ', args) // [ 2, 3 ]
    args.unshift(this)
    console.log('args: ', args) // [ [Function: Vue] { use: [Function] }, 2, 3 ]
    
  }
}

initUse(Vue)

class P{

}

// Vue.use(P)
Vue.use(1,2,3)
