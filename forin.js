const objectLoop = require('./module.objectLoop.js');
const objectTest = require('./module.objecttest.js');
function forObject(a,b){
  try{
    if(typeof(a)==="object"){
      if(typeof(b)==="object"){
        let values = [];

        
        objectLoop(values,a)
        objectLoop(values,b)

        console.log(values);
        // let add =values[0] + values[1];
        // let add = values.reduce((a,b)=>{
        //   return a+b;
        // });
        let add = values.reduce(function(a,b){
          return a+b;
        })
        // console.log(add)
        console.log("다 더한값 :", add);
      }
    }
  }
  catch(error){
    console.log(error)
    console.log("안돼")
  }
}


// const someData={
//   a:{first:1},
//   b:{fist:2}
// }
console.log(objectTest.a);
console.log(objectTest.b);
const a = {first:1};
const b = {first:2};
// const b = new Object();


forObject(a,b);