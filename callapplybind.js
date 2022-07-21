function about (hobby, singer){
    console.log(this.firstname,this.age, hobby , singer)
}
let user1 ={
    firstname: "aniruddh",
    age:22,
    // about:function(hobby, singer){
    //     console.log(this.firstname,this.age, hobby , singer)}
    }

let user2 ={
    firstname: "Prasad",
    age:26,
     
}
// CALL
// user1.about.call(user1 , "football","k.k");
// about.call(user1 , "football","k.k");

// APPLY (no diff just pass the arg in array)
about.apply(user2,["dance","21 pilots"]);

// BIND returns us a function
let myself = about.bind(user1,"football","Messi");
myself();
