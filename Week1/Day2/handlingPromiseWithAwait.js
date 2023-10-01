const makeCofee = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Ready to serve")
    },3000)
})

const serveCofee = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Served")
    },3000)
})

// makeCofee.then((result) => {
//         console.log(result);
//         return serveCofee;
//     })
//     .then((result) => {
//         console.log(result);
//         console.log("Done");
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     });


async function serveOrder() {
        try {
            console.log("Taking order...");
            const coffeeReady = await makeCofee;
            console.log(coffeeReady);
            const coffeeServed = await serveCofee;
            console.log(coffeeServed);
            console.log("Done");
        } catch (error) {
            console.error("Error:", error);
        }
    }
    
serveOrder()