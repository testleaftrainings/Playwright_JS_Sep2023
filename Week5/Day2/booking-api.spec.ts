import {test,expect} from "@playwright/test"


test.describe(`Booking APIs`,async()=>{
    test.describe.configure({mode:"serial"}) 

    //sequential and dependent mode
    //global variable
    let bookingId
    test(`TC001 - Create new booking`,async({request})=>{
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

    test(`TC002 - Verify the booking id is present in get all bookings`,async({request})=>{
        const apiEndpoint = "https://restful-booker.herokuapp.com/booking"

        const getBookingIdsResp = await request.get(apiEndpoint)

        expect(getBookingIdsResp.status()).toBe(200)

        const getBookingIdsRespJson:[] = await getBookingIdsResp.json()

        let isBookingIdFound = false //after all iteration, if the bookind id = false

        // for (let i=0;i<getBookingIdsRespJson.length;i++){
        //     const bookingObj = getBookingIdsRespJson[i] 
        //     console.log(bookingObj.bookingid)
        //     if(bookingObj.bookingid===bookingId){
        //         isBookingIdFound = true
        //         break //break the loop
        //     }
        // }

        type bookingObject = {
            "bookingId":string,
            "name":string,
             "age":string
        }
        getBookingIdsRespJson.forEach((bookingObj:bookingObject)=>{
            if(bookingObj.bookingId===bookingId){
                console.log(`booking id found`)
                isBookingIdFound = true
             }
        })



        //isBookingIdFound = false/true

        expect(isBookingIdFound).toBe(true)
    })
})