/**
 * Test case
 * //setup preconditions [pre-condition]
 * //teardown conditions [post-condition]
 */

import test from "@playwright/test";

//defining the suite title which will have all the test cases inside it
test.describe("Auth test cases", async ()=>{ //suite
    //before each => befor running each test, please run these operations
    test.beforeEach(async ()=>{
        console.log(`---------Handling preconditions---- of test`)
    })

    //after each test case => please execute this set of steps
    test.afterEach(async()=>{
        console.log(`---------Handling post conditions---- of test`)
    })

    test(`TC001: Signup via valid cred @Smoke`,async()=>{
    })

    test(`TC002: Login via valid cred @Sanity`,async()=>{

    })
    test(`TC003: Login via valid cred`,async()=>{
        
    })
    test(`TC004: Login via valid cred`,async()=>{
        
    })
})

/**
 * 
 * Before each
 *  -> test 1
 * 
 * After each
 * 
 * 
 * Before each
 * -> test 2
 * After each
 * 
 * 
 */