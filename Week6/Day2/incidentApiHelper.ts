import { APIRequestContext,expect } from "@playwright/test";

export class IncidentApiHelper{

    apiRequestContext:APIRequestContext //UNDEFINED

    static createIncEndpoint = "https://dev177094.service-now.com/api/now/table/incident"
    static base64AuthToken = "YWRtaW46a0ktOHlAWTNoVE1l"

    constructor(request:APIRequestContext){
        this.apiRequestContext = request
    }

    //properties

    /**
     * create incident
     * delete incident
     * isIncidentExist
     */

    /**
     * 
     * Calling post api to create incd endpoinut
     * body is short summary : string
     */
    async createIncident(shortSummary:string):Promise<string>{
       const createIncApiResp =  await this.apiRequestContext.post(IncidentApiHelper.createIncEndpoint,{
            headers:{
                "Authorization":`Basic ${IncidentApiHelper.base64AuthToken}`
            },
            data:{
                "short_description": shortSummary
            }
        })

        expect(createIncApiResp.status()).toBe(201)
        
        const createIncApiRespJson = await createIncApiResp.json()

        //fetch the incident number
        const incidentNumber = createIncApiRespJson["result"]["number"]

        return incidentNumber
    }

    async getAllIncidents(){

    }

}