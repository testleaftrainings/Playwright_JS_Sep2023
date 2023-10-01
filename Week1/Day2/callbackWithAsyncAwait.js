
async function signUpToSlack() {
    /**
     * adding a variable for you to hit both condition 
     * if true : resolve
     * if false: reject
     */
    const isDbConnectionFine=true 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`User Signed up to slack`);
            if(isDbConnectionFine){
                resolve("User Added to DB");
            }
            else{
                reject("DB conenction error while adding user to DB")
            }
        }, 3000);
    });
}

async function addProfilePic() {
    /**
     * adding a variable for you to hit both condition 
     * if true : resolve
     * if false: reject
     */
    const isDbConnectionFine=true 

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Adding user profile pic`);
            if(isDbConnectionFine){
                resolve("User profile pic added");
            }
            else{
                reject("DB conenction error while adding profile pic")
            }
        }, 3000);
    });
}

async function postNotificationInIntroChannel() {
    /**
     * adding a variable for you to hit both condition 
     * if true : resolve
     * if false: reject
     */
    const isDbConnectionFine=true 

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Posting user intro to channel`);
            if(isDbConnectionFine){
                resolve("Posted intro to slack");
            }
            else{
                reject("DB conenction error while trying to post intro")
            }
        }, 3000);
    });
}

function finalStatusPrint() {
    console.log(`Everything done!`);
}


async function main(){
    /**
     * Implement this main fucntion and need to handle async function by using await keyword
     * 
     * Flow is
     * 1. user signs up to the slack()
     * 2. our script then adds profiel pic for him()
     * 3. then our script post into intro channel 
     * 4. if any step did not complets, it will raise error and we should catch it
     */
}

main()


