// 输入: n = 1
// 输出: [1,2,3,4,5,6,7,8,9]
// var printNumbers = function(n) {
//     let length=10;
//     for(let i = 1;i<n;i++){
//         length*=10
//     }
//     ---->Math.pow(10, n)幂运算
//     let num=[]
//     for(let i =1;i<length;i++){
//         num.push(i)
//     }
//     return num
// };
// ------------------------------字符串解决大数问题
// var printNumbers = function (n) {
//     let max = '';
//     while (n--) {
//         max += "9"
//     }
//     let arr = [];
//     for (let i = 1; i <= max-'0' ; i++) { //字符串转化为数字
//         console.log( i);
//         arr.push(i);
//     }
//     return arr;
// };
// ---------------------------------------位运算
// var printNumbers = function (n) {
//     let max = 1, x = 10;
//     while (n) {
//         if (n & 1) {
//             max = max * x;
//         }
//         x *= x;
//         n >>= 1;
//     }
//     let res = [];
//     for (let i = 1; i < max; i++) {
//         res.push(i);
//     }
//     return res;
// }
var printNumbers = function (n) {
  let res=[]
  var dfs=function(stringOfNumber,lengthOfBit){
    if(stringOfNumber.length==lengthOfBit){
        res.push(stringOfNumber);
        return
    }
    for(let i='0';i<='9';i++){
        stringOfNumber+=i.toString();
        dfs(stringOfNumber,lengthOfBit);
        stringOfNumber=stringOfNumber.slice(0,-1);
    }
  }
  for(let i=1;i<=n;i++){
    for(let j='1';j<='9';j++){
        dfs(i.toString(),j)
    }
  }
  return res
}