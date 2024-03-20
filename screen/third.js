// async function getdata() {
//     try{
//     let data =await fetch("https://jsonplaceholder.typicode.com/users");
//     data=data.json()
//     console.log(data)
// }
// catch(err){
//     console.log(err)
// }
// }
// getdata()

// const b= a.reduce((a,b) => ({...a,i:i}),{})

//  console.log("bbbbb",{...a})

//  var arr = [{a:{b:1}},{c:{d:2}}] 
// var newObj = arr.reduce((a, b) => Object.assign(a, b), {})

// console.log(newObj)

myArray = ["first", "second", "third", "fourth"]
console.log("aaa",{...myArray})

 const a=[1,2,3,4,5]


var newObj = a.reduce((a, b) => Object.assign(a, b), {})

console.log("newObj",newObj)

console.log(...a)

var arr = [{key:"11", value:"1100"},{key:"22", value:"2200"}];
var object = arr.reduce(    
  (obj, item) => Object.assign(obj, { [item.key]: item.value }));

console.log(object)

const b=a.unshift(
    'p'
)
console.log(a)
