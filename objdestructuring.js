const band = {
    BandName: "twenty one pilots",
    FamousSong: "Ride",
    Year: 1988
};

let {BandName,FamousSong, ...Rest}= band;
console.log(BandName);
console.log(Rest);