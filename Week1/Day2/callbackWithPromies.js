
function signUpToSlack() {
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
                reject("DB conenction error")
            }
        }, 3000);
    });
}

function addProfilePic() {
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

function postNotificationInIntroChannel() {
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

    /**
     * Implement the script using promise handling using .then and catch approach
     * 
     * Flow is
     * 1. user signs up to the slack() and if its sucessfull , we call next step
     * 2. our script then adds profile pic for him(), if its succesfull, we call next step
     * 3. then our script post into intro channel , if its succesfull, we call next step
     * 4. if any step did not complets, it will raise error and we should catch it
     * 
     * 5. Note: you can introduce error / reach reject state in promise by turning the 
     * flag isDbConnectionFine  = false
     */


