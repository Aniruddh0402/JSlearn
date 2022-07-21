// const btn = document.querySelector(".btn");
// // console.log(btn);
// // function clickMe(){
// // console.log("you clicked me !!!!");
// // }
// btn.addEventListener("click", ()=>{
//     console.log("u clicked on me!!!!")
// });

let allButtons = document.querySelectorAll(".my-btns button");
// console.log(allButtons);

for (let button of allButtons){
    button.addEventListener("click",function(){
        console.log(this.textContent )
    })
}
 