type supportedBrowser = "Chrome"|"Firefox"

function invokeBrowser(browser:supportedBrowser){
    console.log(`invoking browser ${browser}`)
    if(browser==="Chrome"){
        console.log(`open chrome`)
    }
    else{
        console.log(`open firefox`)
    }
}

//annoate your funciton params with the static type you want to add
function printMyName(name:string){
    console.log(name)
}

//define array types
const students = ["prateek","parashar"]
let studentNames:string[] = [];


//combine type created with builtin type
let numOrString:number|string
//as you can see now it will accept both the number and string
numOrString = "23"
numOrString = 23