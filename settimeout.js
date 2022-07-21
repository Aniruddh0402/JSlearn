console.log("script start");

setTimeout(()=>{ //it takes function and time as parameter 
    console.log("in the timeout");
},1000);

for(let i=0; i<=100; i++);{

    console.log("=====");
}
console.log("script end");
 