//for-each 

const students = ["prateek","ranjini"]

//anonymous function
students.forEach(function(curVal,curIndex){
    console.log(`for index ${curIndex}, current val is ${curVal}`)
})

///[1,2,3,4,5]
//i=0 ; i<length ; i++
//console.log(i)
//forEach
/**
 * function myForEach(cb,index,val){
 *      for(let i=0; i<len;i++){
 *          index = i
 *          val = arr[i]
 *          cb(index,val)
 *  }
 * 
 * }
 * 
 * 
 */

students.forEach((curVal)=>{
    /**
     * i=0 ; i<length
     * index = i
     * value = arr[i]
     * cb(index,value)
     * 
     *
     */
    console.log(`in arrow function :current val is ${curVal}`)

})

