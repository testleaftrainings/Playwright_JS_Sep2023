import test, { expect } from "@playwright/test";

test(`POST API`,async({request})=>{

    //make post api call request
    const apiEndpoint = "https://reqres.in/api/register"
    const apiPayload = {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    }


    const apiResponse = await request.post(apiEndpoint,{
        data:apiPayload
    })

    //response status code
    const respStatusCode = apiResponse.status()

    expect(respStatusCode,`expecting post api call to give 200`).toBe(200)


    //response body as json

    const respBodyAsJson = await apiResponse.json()

    console.log(respBodyAsJson)

    console.log(`token is ${respBodyAsJson.token}`)

    //response body headers

    const respBodyHeaders = apiResponse.headers()

    console.log(respBodyHeaders["content-type"])




})