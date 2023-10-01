function printUserInfo(cb){
    console.log(`printing user info`)
    cb()
}

function addUserToDb(){
    console.log(`adding user to db`)
}

// printUserInfo(addUserToDb,"sql")

function sendEmail(cb,a){
    console.log(`sending email`)
    cb(a)
}

function anything(a){
    console.log(`printing anything ${a}`)
}


sendEmail(anything,"hello")