import {test,expect} from "@playwright/test"
import exp from "constants"


test(`get api`,async({request})=>{

    /**
     * Make a get api call
     * how to give the api endpoint
     * we get the APIResponse back if rquest.get is succesfull
     * APIResponse.status() => number [200, 500]
     * expect(number).toBe(200)
     * 
     * //Response body
     * USERID -> access the response body
     */
    const apiResponse = await request.get("https://reqres.in/api/users/2",{
        headers:{
            "Accept":"application/json",
            "Token":"12345"
        }
    })

    console.log(`API Response status code is ${apiResponse.status()}`)

    const apiResponseStatus = apiResponse.status()

    //status code assertion
    expect(apiResponseStatus,`expecting api call to be 200`).toBe(200)

    const apiResponseBodyAsJson = await apiResponse.json()
    
    console.log(apiResponseBodyAsJson)

    const userEmailFromBody = apiResponseBodyAsJson.data.email

    console.log(`email is ${userEmailFromBody}`)

    //assertion to verify the response body contained email as for this user
    expect(userEmailFromBody,`expecting user email to be janet.weaver@reqres.in`).toBe("janet.weaver@reqres.in")



})