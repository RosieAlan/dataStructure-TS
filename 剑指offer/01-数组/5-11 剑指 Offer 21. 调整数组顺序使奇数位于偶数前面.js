// 输入：nums = [1,2,3,4]
// 输出：[1,3,2,4] 
// 注：[3,1,2,4] 也是正确的答案之一。
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// --------------------------------双指针法
var exchange = function(nums) {
   let i=0;j=(nums.length-1)
   while(i<j){
    while(i<j&&(nums[i]%2)!==0) i++
    while(i<j&&(nums[j]%2)==0) j--
    let num=nums[i]
    nums[i]=nums[j]  
    nums[j]=num
   }
   return nums
};
// ------------------------------------傻白甜法
var exchange = function(nums) {
    console.log('nums', nums);
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2!==0){
            let num=nums[i]
            nums.splice(i,1)
            nums.unshift(num)
        }
    }
    return nums
};
console.log(exchange([2,3,6]));