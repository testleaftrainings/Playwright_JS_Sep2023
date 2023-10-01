//list of valid account numbers
/**
 *  //incremeneting each account number by 1 whenever new account gets created
 */
/**
 * Add data type for the arrays we have added to hold the list of account
 * 
 */
const listOfSavingAccountNumbers = ["1000","10001","1002"]
const listOfCheckingAccountNumbers = ["1000","10001","1002"]

/** TO DO Task for typescript
 * Add correct data type for userName parameter
 * Add custom data type to hold typeOfAccount , either it can be checking or saving
 * opening balance is default parameter whose value should be 5000
 */
function openNewAccount(userName,typeOfAccount,openingBalance){
    /**
     * Here use the generateNewAccountNumber() to get the new account number
     * Add that new account number in the array
     * just print console message that new account added for username with this balance
     */
}

/** TO DO Task for typescript:
 * Add correct data type for account number parameter for function
 * Use the custom data type to restrict type of account to saving or checking
 * Add return type for this function 
 * Note: we have not covered function return type in typescript but just search on 
 * internet and try to solve it
 * 
 * This function will do this:
 * - based on type of account selected (checking or saving)
 * - we will check if the given accountNumber exists in the array or not
 * - if not we will return false otherwise true
 * - 
 */
function isValidAccount(accountNumber, typeOfAccount){
    /**
     * Note: to check if the given value is present in array you can use .includes()
     * e.g
     * const isAccountNumberPresent = listOfSavingAccountNumbers.includes(accountNumber)
     */
}

/** TODO:
 *  This function will get the last account number present in the array 
 *  Then will increment the account number by 1 
 *  return the new account number back
 *  Note: we have not covered function return type in typescript but just search on 
 *  internet and try to solve it
*/
function generateNewAccountNumber(typeOfAccount){

}


//Script

/**
 * 1. ask user his name
 * 2. ask user his account number
 * 3. ask user his type of account
 * 4. now check if for the type of account selected, the given account number exist or not
 *  4.a If account number does not exist then ask him
 *   4.a.1 if he want to open a new account
 *   4.a.2 ask him the type of account he want to open
 *   4.a.3  then add a new account for him and update the array with the new acccount
 * 
 *  4.b If account number is valid, just print the message "You can proceed further"
 * 
 */