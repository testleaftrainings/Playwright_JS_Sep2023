//signup api/page
/**
 * firstname (mandatory)
 * email (mandatory)
 * lastname (mandatory)
 * city : optional
 * age: optional
 */

//to make any parameter option : ? 
//note: optional parameter should always come after mandatory parameters
function signup(fname:string, email:string, lname:string, city?:string, age?:number){
    console.log(`sign up with ${fname} ${lname} ${email} ${city} ${age}`)

}

//client/consumer
signup("prateek","p@gmail.com","pp")

