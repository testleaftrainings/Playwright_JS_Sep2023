//default parameters

/**
 * wheneve user is opening a new account in bank
 * create new account with default 5000 rs in balance
 * 
 * i want to open an account, with 15000 balance
 * 
 */


//to define a default parameter, you need to initailse it with the value in the function call
function openNewAccount(userName:string, openingBalance=5000){
    console.log(`opening account for ${userName} with balance ${openingBalance}`)
}

openNewAccount("prateek", 15000)
