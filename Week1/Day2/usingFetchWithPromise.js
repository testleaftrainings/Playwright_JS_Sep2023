
fetch("https://jsonplaceholder.typicode.com/users").then((resp)=>{
    return resp.json()
}).then((jsonVal)=>{
    console.log(jsonVal)
}).catch((err)=>{
    console.log(`error occured ${err}`)
})

