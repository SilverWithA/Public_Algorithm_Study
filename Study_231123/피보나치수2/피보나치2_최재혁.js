// node.js의 fs 모듈을 활용해 파일 I/O작업 구현
// reacFileSync는 동기식, readfile비동기식

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
var n = Number(input);

// n번째 피보나치 수를 return

/*
function pibo(n) {
    if (n <= 1) {
    return n;
    }
    const arr = [];
    arr.push(0);
    arr.push(1);
    for (let i=2; i<=n; i++){
        arr[i] = arr[i-1] + arr[i-2];
        arr.push(arr[i]);
    }
    return arr[arr.length-1];
}
*/

// 시간초과로 틀렸을 수 있다니까 dp풀이법으로 풀이
// 왜 BigInt를 사용해서 정수를 저장했는지 = number 타입보다 큰 정수를 저장할 수 있어서
// 왜 n개가 아니라 n+1개의 요소를 생성했는지 = dp 배열은 n번째 피보나치 수를 저장하기 위한 배열인데,
    // n번째 피보나치수를 저장하려면 n개의 요소가 필요하다. 따라서 n+1개의 요소를 생성
    // 0번째 피보나치수도 저장하기 때문에 n+1개의 공간이 필요함.

const dp = Array(n+1).fill(BigInt(0)); // n+1개의 요소를 가진 dp배열 생성 - 요소들은 0으로 채운다.
dp[1] = BigInt(1);

for (let i=2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
}

console.log(dp[n].toString()); // BigInt 타입은 console.log로 출력할 수 없어서 String 타입으로 변환하여 출력
