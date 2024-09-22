const a="my name is Rina technical"
 //1st way
const b=a.split(" ").map(word=> word.replace(word[0], word[0].toUpperCase())).join('')

console.log("dsds",b)

const c = "#" + b;
console.log("dsds",c)

// 2nd 
const v=a.split(" ").map(word=> word.charAt(0).toUpperCase() + word.slice(1)).join('')

console.log(v)

const d= a.reduce((acc,cur)=> cur.length>acc.length ? cur.length:null)
console.log(d)