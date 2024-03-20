// const a=[1,2,12,4,21,1,2,3,4,2,1,6]
// const b=a.length;
// console.log("b",b);

// let x=function(x,y){
//   return  x+y
// }

// async function mydisplay(){
// let mypromise = new Promise(function(resolve,reject){
//   resolve("I aval");
// })
//  await mypromise

// }

// mydisplay();

// async function all(){
//   let aaa= new Promise(function(resolve,reject){
//     resolve("caall")
//   })
//   await aaa}
// all()
// console.log("all",all())


// async function llo(){
//   const sum = new Promise(function(resolve,reject) {
//     resolve("popo");
//   })
// }
// llo()


// const a=10;
// const b= new Promise(function(resolve,reject){
//  if(a>2){
//     resolve("aaaa");
//  }else{
//   reject("bb")
//  }
// })
// console.log(b)
 
async function a(){
    a=5
    const n=new Promise(function(resolve,reject){
        if(a>2){
            resolve("a");
        }
        else{
            reject('b');    
        }
    })
    console.log("llll",n)

}
a()
//   function w(){
//     console.log("ass");
//   }
  
//   function q(){
//     console.log("vvvv");
//   }

//   const c = function(callback){
//     console.log("lllll");
//   }
//   callback()

// async function f() {

//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000)
//   });

//   let result = await promise; // wait until the promise resolves (*)

//   console.log(result); // "done!"
// }

// f();

// async function fn(){
//   let promise =new Promise((resolve,reject) =>{
//     setTimeout(()=> resolve("done"),1000)

//   })

//   let res = await promise
//   console.log(res)
// }

// function Hi(callback){
//   console.log("hi")
//   callback()
// }

// function Hello(){
//   console.log("Helo");
// }
// Hi(Hello)

// function Hi(callback){
//   console.log("add")
//   callback()
// }
// function Hello(){
//   console.log("dele")
// }
// Hi(Hello)

// async function add(){
 
//   let bbb =new Promise((resolve,reject) =>{
//     setTimeout(() => {
//      resolve("addd")
//     }, 1000);
//   })


// let promise = await bbb
// console.log(promise)
// }

// const x=[1,2,3,4,5,[2,3,5],[1,4,5,9]]

// y=x.flat()
// console.log(y)

// const g=[1,2,3,4,5]
// g.join("7")
// console.log(",,,",g)

// const p=g.map((r)=>
// r*2
// )
// console.log(p)

// const salaries= {
//     Jack : 24000,
//     Paul : 34000,
//     Monica : 55000,
//     kon:undefined,
//     ali:null
// }

// // using for...in
// for ( let i in salaries) {
        
//  console.log(".....",i)
//  console.log(".....",salaries[i])

   

// }


// async function getdata() {
//     let data =await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(data)
// }
// getdata()