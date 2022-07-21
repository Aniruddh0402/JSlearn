//promise produce
const bucket = ['coffee', 'kurkure', 'vegetables', 'salt', 'rice'];
let myPromise = new Promise((resolve, reject) => {
    if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve("Fried Rice");
    } else {
        reject("couldn't do it");
    }
})

//promise consume
myPromise.then((myFriedRice) => {
    console.log("will u have", myFriedRice);
}).catch((error) => {
    console.log(error)
})