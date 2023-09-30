let accountBalance = 10000
const expCardNumber = 8989
const expAtmPin = 1234

//number of trasnaction we want to do
const totalTransactionToDo = 3

//take user input
const userName = prompt("Please enter your user name")
const userCardNumber = prompt("Please enter your card number")
const shouldDisplayLastTransactions = prompt("Do you want to display last transactions (Yes/No")

const transactionArray=[]

//check if card number matches, if yes then print welcome message and move forward
if(userCardNumber==expCardNumber){
    console.log(`Welcome to ATM app ${userName}`)
    const userAtmPin = prompt("Please enter your atm pin")
    //check for the atm pin
    if(userAtmPin!=expAtmPin){
        console.error(`Wrong atm pin entered for your card`)
    }
    else{
        console.log(`Card and pin verified`)        
        for (let i=0; i<totalTransactionToDo; i++){
            const moneyToWithdraw = prompt(`Please enter money you want to withdraw for transaction ${i+1}`)

            //check if its within limits
            if(moneyToWithdraw<=accountBalance){
                accountBalance = accountBalance-moneyToWithdraw
                console.log(`Transaction successfull!!`)
                transactionArray.push(moneyToWithdraw) //adding each valid transaction to the array
            }
            else{
                console.error(`Wrong amount entered it should be equal to or less then balance`)
                transactionArray.push(`Invalid amount - ${moneyToWithdraw} `) //adding each valid transaction to the array

            }
        }

    }

}
else{
    console.error(`Wrong card number entered for ${userName}`)
}


//check if user wanted to display balance
if (shouldDisplayLastTransactions=="Yes"){
    for(let i=0;i<transactionArray.length;i++){
        console.log(`Transaction ${i+1} was done with ${transactionArray[i]}`)
    }
}
