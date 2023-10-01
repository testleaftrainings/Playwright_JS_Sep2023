//add types using typescript

//type = any 

//age should only hold numbers
let age:number;

age = 23
console.log(`my age is ${age}`)

//string
let myName:string;
myName = "prateek"

//boolean
let isAvailable:boolean
isAvailable = false

//any
let anything:any

// explicit type // implicit type inference

//implcit type before
let myCity = "Ujjain";

//Custom type / user defined type

//chrome and firefox

//its a type which supports only 2 string either chrome or firefox
// type supportedBrowser = "Chrome"|"Firefox"

// function invokeBrowser(browserName:supportedBrowser){
//     console.log(`invoking browsr: ${browserName}`)
// }

invokeBrowser("Chrome")

//built in datatypes to combine and create a new data type

type numberOrString = number|string


let anyVariable:numberOrString

anyVariable = 23
anyVariable = "prateek"

