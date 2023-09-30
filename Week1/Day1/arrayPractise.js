//Class work -1C

const myPreferredBrowsers = ["Chrome","Safari"]
const sizeOfBrowsersList = myPreferredBrowsers.length
console.log(`I have ${sizeOfBrowsersList} preferred browsers in my list`)

console.log(`My first preferred browser is ${myPreferredBrowsers[0]}`)
console.log(`My second preferred browser is ${myPreferredBrowsers[1]}`)


//reassigning the 1st index of my array to new value
myPreferredBrowsers[1] = "Firefox"
console.log(`Now, My second preferred browser is ${myPreferredBrowsers[1]}`)


// pushing new browser to the list
myPreferredBrowsers.push("Safari")
console.log(`Now, I have ${myPreferredBrowsers.length} preferred browsers in my list`)

//printing last value of array
const lastBrowserFromList = myPreferredBrowsers[myPreferredBrowsers.length-1]
console.log(`Now, My least preferred browser is  ${lastBrowserFromList}`)





