
// //syntax to create promise
// /**
//  * 
//  * new Promise((resove,resolve)=>{
//  * 
//  * })
//  */

// async function makeCoffee(){
//     new Promise((resolve,reject)=>{
//         //coffee is ready
//         let isCoffeeReady = false
//         if(isCoffeeReady){
//             resolve("Ready")
//         }
//         else{
//             reject("Machine is not working")
//         }    
//     })
// };
// const makeCoffee1 = new Promise((resolve,reject)=>{
//     //coffee is ready
//     let isCoffeeReady = false
//     if(isCoffeeReady){
//         resolve("Ready")
//     }
//     else{
//         reject("Machine is not working")
//     }    
// })

// //Consume the promise
// makeCoffee.then((value)=>{
//     console.log(`On success ! ${value}`)
// }).catch((err)=>{
//     console.log(`On error ! ${err}`)
// })

// as a consumner
/** 
 * we use .then(to store the return value of resolve)
 * //.then to handel the resolution of promise
 * 
 * //.catch to catch the rejection
 * 
 * 
 */

//promise chaining concept
console.log(`from line 51`)
fetch("https://jsonplaceholder.typicode.com/users").then((resp)=>{
    console.log(`response recieved`) // you have the response
    return resp.json() //creating a new promise now to conver my resp to json
}).then((jsonVal)=>{
    console.log("printing json")
}).catch((err)=>{
    console.log(err)
})
console.log(`from line 52`)


//async/await

async function completeTheCoffeeOrder(){
    try{
        await prepareCoffe() //wait until the promise resolve to success
        await serveCofee()
        console.log(`order is done!`)
    }
    catch(err){
        console.log(`error occurred`)
    }

}


//login to a webapp
/**
 * //page.goTo("url").then((resolve)=>{
 *      return page.locator("#loginButton")
 * }).then((resolve)=>{
 *      page.click()
 * })
    

 */

/**
 *  await page.goTo("url")
 *  await page.locator("#loginButton").click()
 *  //login as user 1
 * 
 *  //login2 as user 2
 * 
 *  async function login(username){
 *         await page.goto()
 * }
 * 
 * await Promise.all[login(user1),login(user2)]
 * 
 * // entre the right cred, login //200
 * const promiseForLogin = page.waitForResponse("https://login") //create a promise to playwright
 * await click("")
 * const promiseResp = await promiseForLogin
 */
