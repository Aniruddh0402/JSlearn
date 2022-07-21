let winningNumber = 19;
let UserGuess = +prompt("guess a number")
// console.log( typeof UserGuess ,UserGuess);

if(UserGuess === winningNumber){
    console.log("right guess");
}
else{
    if(UserGuess < winningNumber){
        console.log("too low!!!");
    }else{
        console.log("too high!!!");
    }
}
