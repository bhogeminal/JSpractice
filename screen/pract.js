// function sum(a,b){
//     return a+b;
//   }
//   console.warn(sum(1,"2"))
// const num=[1,2,3,45,23,12];
// const m=num.length;
// console.log("m",m)
// num[6] = 24
// num[8] = 24
//=====================*************===================//
//   String Method //
// console.log(num)

const nn="Hello how are you"
console.log(Array.from(nn));
// const a=[...n];
// console.log(a)

// console.log(n.split(''))

// const b= "all time a ten appears apple"

// const c= b.replace("a","o")
// console.log(c);

// const d= b.replace(/a/g,"o")
// console.log(d)

// const e = (b.substring(5,10))
// console.log(e)

// const f =b.substring(1,String.length)
// console.log(f)

// const g= b.split("").reverse().join()
// console.log(g)
//============Array method========//

const h=[1,32,3,2,4,5,6,2,3,4,5]
const j=h.sort((a,b)=>a-b)
console.log("ccccc0",j)

const i=h.includes(2)
console.log(i)

const filter =h.filter(n => n>4)
console.log(filter)

const map= h.map(m => m+2)
console.log(map)

const reduce=h.reduce((k,l) => k +l );
console.log(reduce) ;
const k=["all time hi say"]
const join = k.join("")
console.log(".....",join)
const l= "hi how are you okay fine thank you"
const m= l.split(" ")
console.log(m)
const n=m.reverse()
console.log(n)
const o  =n.join()
console.log(o)

const p= [...l];
console.log("qqqq",p)

const q= Array.of(l);
console.log("of",q,)

const r=h.shift()
console.log("shift",h)
const s=h.unshift(r)
console.log("//////",h)
// const unshift = t.unshift()
// console.log(t)

// const u=new Set(t)
// console.log(u)

// const v = t.sort(( a,b)=> a<b? -1 : 1)
// console.log(v)
// const w = t.sort(( a,b)=> a<b? 1 : -1)

//   console.log(w)

//splice method//


//Slice //
// Array.slice(start,end)
// let ar=[3,2,1,4,5,6,3,4]

// const x=ar.slice(1,5)
// console.log("ar",x)

// let y=ar.entries()
// console.log(y)

// for(let x of y){
//     console.log(x)
// }

// const num1=[1,2,3,45,23,12];
// let z =num1.reduce((a,c) =>{
//     return a+c
// })
// console.log(z)
// const zz=num1.splice(2,2,"r","t")
// console.log(zz)


 let yyy=[3,2,1,4,5,67,22]
console.log("yyyy",yyy.unshift(5,6))
// Array.splice(index,howmany,item1,...itemx)
yyy.splice(3,2,'a','b','d')
console.log(yyy)













// const t=[1,2,3,22,1,2,3,55,4,66,7]

// const f=t.slice(1,6)
// console.log("aaaaabbbbbbcccc",f)

// const y=t.splice(1,5)
// console.log(y)











































































































































































































































































































































































































































































































































































































































































































































































































































































