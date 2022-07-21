// const UserCart = [
//     {productId:1,ProductName:"Iphone",Price:58000},
//     {productId:2,ProductName:"Ipad",Price:88000},
//     {productId:3,ProductName:"Airpods",Price:24000},
// ]

// //to get value of total cart

// let TotalValue = UserCart.reduce((accumulator, currentvalue)=>{
//     return accumulator + currentvalue.Price;
// },0);

// console.log(TotalValue);

// accumulator  currentvalue  return 
//    0              58000      58000
//  58000           88000


//TOO DELETE VALUE FROM ARRAY USE SPLICE FUNCTION
let a = [1,"b",3,"e"];
console.log(a);
a.splice(2,2);
console.log(a);