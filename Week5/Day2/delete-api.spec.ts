import {test,expect} from "@playwright/test"


test.describe.only(`Booking APIs- delete`,async()=>{
    test.describe.configure({mode:"serial"}) 

    //sequential and dependent mode
    //global variable
    let bookingId:number
    let authToken:string

    test(`TCOO1 - Create Auth token`,async({request})=>{
        const apiEndpoint = "https://restful-booker.herokuapp.com/auth"

        const authTokenApiResp = await request.post(apiEndpoint,{
            headers:{
                "Content-Type":"application/json"
            },
            data:{
                "username" : "admin",
                "password" : "password123"
            }
        })

        expect(authTokenApiResp.status()).toBe(200)

        const authTokenApiRespJson = await authTokenApiResp.json()

        authToken = authTokenApiRespJson["token"]

        console.log(`the auth token is ${authToken}`)
    })


    test(`TC002 - Create new booking`,async({request})=>{
        const apiEndpoint = "https://restful-booker.herokuapp.com/booking"
        const apiPayload = {
            "firstname" : "Prateek",
            "lastname" : "Parashar",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        }
        

        const createBookingApiResp = await request.post(apiEndpoint,{
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            data:apiPayload
        })

        const createBookingApiStatusCode = createBookingApiResp.status()
        console.log(`API status code is ${createBookingApiStatusCode}`)

        expect(createBookingApiStatusCode).toBe(200)

        const createBookingApiRespJson = await createBookingApiResp.json()
        bookingId = createBookingApiRespJson.bookingid

        console.log(`booking ID is  ${bookingId}`)

        expect(createBookingApiRespJson["booking"]["firstname"]).toBe("Prateek")
        expect(createBookingApiRespJson["booking"]["lastname"]).toBe("Parashar")
    })

    test(`TC003 - Delete the booking`,async({request})=>{
        const apiEndpoint = `https://restful-booker.herokuapp.com/booking/${bookingId}`

        const deleteBookingResp = await request.delete(apiEndpoint,{
            headers:{
                "Cookie":`token=${authToken}`
            }
        })

        const statusCode = deleteBookingResp.status()
        
        console.log(`status code is ${statusCode}`)

        expect(statusCode).toBe(201)

    })

    test(`TC004 - Verify the deleted booking is not present in get all booking`,async({request})=>{
        const apiEndpoint = "https://restful-booker.herokuapp.com/booking"

        const getBookingIdsResp = await request.get(apiEndpoint)

        expect(getBookingIdsResp.status()).toBe(200)

        const getBookingIdsRespJson:[] = await getBookingIdsResp.json()

        let isBookingIdNotFound = true //after all iteration, if the bookind id = false

        // for (let i=0;i<getBookingIdsRespJson.length;i++){
        //     const bookingObj = getBookingIdsRespJson[i] 
        //     console.log(bookingObj.bookingid)
        //     if(bookingObj.bookingid===bookingId){
        //         isBookingIdFound = true
        //         break //break the loop
        //     }
        // }

        type bookingObject = {
            "bookingId":number,
        }
        getBookingIdsRespJson.forEach((bookingObj:bookingObject)=>{
            if(bookingObj.bookingId===bookingId){
                console.log(`booking id found`)
                isBookingIdNotFound = false
             }
        })

        expect(isBookingIdNotFound).toBe(true)
    })


})