// 
// function init() {
//     var name = 'Mozilla'; // name is a local variable created by init
//         function displayName() {
//             // displayName() is the inner function, a closure
            
//             console.log(name); // use variable declared in the parent function
//         }
//     displayName();
// }
// init();

let outerfun = (a)=>{
    let b = 10;
    let innerfun = (b)=>{
        let sum = a + b;
        console.log(`sum of two no. is ${sum}`);
    }
    innerfun(16);
   // console.log(c)
}
outerfun(5);