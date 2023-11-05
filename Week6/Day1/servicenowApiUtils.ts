import { APIRequestContext, expect } from "@playwright/test";

export async function createNewIncident(requestContext:APIRequestContext,shortSummary:string):Promise<string>{
    const createIncidentByApiResp = await requestContext.post("https://dev177094.service-now.com/api/now/table/incident",{
        headers:{
            "Authorization":"Basic YWRtaW46a0ktOHlAWTNoVE1l"
        },
        data:{
            "short_description": shortSummary
        }
    })

    expect(createIncidentByApiResp.status(),`EXPECTIN create incident req to be sucessfull`).toBe(201)

    const createIncidentByApiRespJson = await createIncidentByApiResp.json()

    const incidentNumber = createIncidentByApiRespJson.result.number as string

    console.log(`The incident created is ${incidentNumber}`)

    return incidentNumber
}

export async function getAllIncidents(requestContext:APIRequestContext){
    const getAllIncidentsByApiResp = await requestContext.get("https://dev177094.service-now.com/api/now/table/incident",{
        headers:{
            "Authorization":"Basic YWRtaW46a0ktOHlAWTNoVE1l"
        }
    })

    expect(getAllIncidentsByApiResp.status(),`EXPECTIN get all  incident response to be sucessfull`).toBe(200)

    const getAllIncidentsByApiRespJson = await getAllIncidentsByApiResp.json()

    return getAllIncidentsByApiRespJson
}


export async function isIncidentExists(requestContext:APIRequestContext,incidentNumber:string):Promise<boolean>{

    let isIncidentFoundInList = false

    const getAllIncidentRespJson = await getAllIncidents(requestContext)

    const listOfResults:object[] = getAllIncidentRespJson.result

    for (let i=0;i<listOfResults.length;i++){
        if(listOfResults[i]["number"]!=incidentNumber){
            continue
        }
        isIncidentFoundInList = true
        break
    }
    return isIncidentFoundInList

}