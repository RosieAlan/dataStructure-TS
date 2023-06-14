// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
/**
 * @param {number} n
 * @return {number}
 */
// -------------js版本
// var fib = function(n) {
//     if(n<2) return n ;
//     let a=0;b=1;sum=0;
//     for(let i=0;i<n;i++){
//         sum=(a+b)%1000000007
//         a=b;
//         b=sum;
//     }
//     return a;
// };
// ------------------TS版本
// function fib(n: number): number {
//     let a: number = 0;
//     let b: number = 1;
//     for (let i: number = 0; i < n; i++) {
//         const sum: number = (a + b) % 1000000007
//         a = b;
//         b = sum;
//     }
//     return a
// };

