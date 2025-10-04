//let nums =[1,4,5,2,1,2];//
//let k =2;//
const nums =[1,4,5,2,1,2];
const k =2;

let count = 0;
//let i;//
for (let i=0; i< nums.length; i++)
    {
    if(nums[i]===k)
    {
        count++;
        console.log("The value of i is:", i );
    }
}
    console.log("The number of occurences of No ", k, "is:", count);
