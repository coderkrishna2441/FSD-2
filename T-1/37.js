// Below JSON object a is given. Print below sentence in console from the given object.
// Hi ! We are students of LJU .Exam - FSD2 
// const a = { 
//  "A" : "LJU",
//  "B" : ["CSE", { 'M' : [ { "N" : "FSD2" } , "Exam" ]}],
//  "C" : [ {"D" : "Hi"},{"E" : ['are', 4, {'F' : ['semester', 'We']}]}],
//  "G" : {"H" : "students", "I" : ["of","!"] },
//  "J" : [{"K" :".", "L":"-"},"FSD-2"]}


const a = { 
    "A" : "LJU",
    "B" : ["CSE", { 'M' : [ { "N" : "FSD2" } , "Exam" ]}],
    "C" : [{"D" : "Hi","E" : ['are', 4, {'F' : ['semester', 'We']}]}],
    "G" : {"H" : "students", "I" : ["of","!"] },
    "J" : [{"K" :".", "L":"-"},"FSD-2"]};
console.log(a.C[0].D,a.G.I[1],a.C[0].E[2].F[1],a.C[0].E[0],a.G.H,a.G.I[0],a.A,a.J[0].K,a.B[1].M[1],a.J[0].L,a.J[1]);
