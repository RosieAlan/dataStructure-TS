// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
// var fib = function (n) {
//     let a = 0; b = 1; sum = 0;
//     for (let i = 0; i < n; i++) {
//         sum = (a + b) % 1000000007;
//         a = b;
//         b = sum;
//     }
//     return a 
// };
var fib = function(n) {
    let sum1=0;
    if (n==0) return 0
    if (n==1) return 1
    sum1=fib(n-2)+fib(n-1)% 1000000007;
    return sum1
};

