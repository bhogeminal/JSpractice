const i="my name is Rina technical"
 //1st way
const b=i.split(" ").map(word=> word.replace(word[0], word[0].toUpperCase())).join('')

console.log("dsds",b)

const c = "#" + b;
console.log("dsds",c)

// 2nd 
const v=i.split(" ").map(word=> word.charAt(0).toUpperCase() + word.slice(1)).join('')

console.log(v)

const d= i.reduce((acc,cur)=> cur.length>acc.length ? cur.length:null)
console.log(d)

///////////////////////////////////////////////////////////////////////////////


const longestWord = i.split(" ").reduce((acc,cur)=> (cur.length > acc.length ? cur:acc),"")
console.log(longestWord)

/////////////////////////////////////////////////////

// repeat i how many time

const e="TechnicaLmississiipii"

const countchar=(word,char)=>{
    word=word.toLowerCase();
    char=char.toLowerCase()
    total=word.split('').reduce((acc,cur)=>{
        if(cur===char){
            acc++
        }
        return acc
    },0)
    console.log(total)
}


console.log(countchar(e,'i'))

///////////////////////////////////////////////////////////////
////palindrom///////////////



let f="racecar"
  const pal=()=>{
       let c=f.split(' ').reverse().join()
       
  return c===f
  
  }
  
   console.log(pal(i))

   ////////////////////////////////////////////////////

   ////pal////////////

   let g="racecar"
  const paldr=()=>{
       


  return c===g
  
  }
  
   console.log(pal(g))

   /////////////////////////////////////

//////avg/////////
   const j=[30,20,10,12,11,22,33]
let h= j.reduce((acc,cur)=>acc+cur,0)
let avg=h/j.length
console.log(h)
console.log(avg)

//////////////////////////////////////////////

const a={
    name:"aa",
    age:20,
    pass:23455
}

Object.values(a).forEach((key)=>{
    console.log(key)
})
for(let b in a){
    console.log(b)
}
//////////////////////////////////////

const cc=[10,20,11,22,30,20,10,11]

const dc=new Set(c)
console.log(d)

//////////////////////////////
//  find two num sum=7
const k=[2,1,4,3,6,5]
let found=false
for(i=0;i<k.length;i++){
    for(j=i;j<k.length;j++){
        if(k[i]+k[j]==7){
            found=false
            console.log(`${k[i]} and ${k[j]} is same`)
        }
    }
}
if(!found){
    console.log("not found")
}