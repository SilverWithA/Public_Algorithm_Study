function solution(s) {
    
    // 예시 s = "abcabcdede"
    
    let shortenLen = s.length; // shortenLen: 압축 후 문자열 길이의 최솟값을 저장할 변수 그릇(압축 전 문자열 길이로 초기화)

    // *압축 단위를 i로 -  문자열을 1개 단위, 2개 단위, ... *문자열 길이의 절반 단위(문자열 최대길이를 최소로 압축할 수 있는 단위)로 잘라가며 압축 수행 -> 최대 길이를 최소로 압축할 수 있는 단위(=최대 압축 단위)로 값들이 업데이팅 되는 로직.
    for (let i = 1; i <= s.length / 2; i++) {
    
        let cnt = 1; // cnt: 단위가 반복되는 횟수를 카운트할 초기화 변수 -> 숫자로 집어 넣을 
    
        let nowStr = s.slice(0, i); // nowStr: 현재 단위 문자열을 임시로 저장해둘 초기화 변수
        // slice (첫번째 인자로 시작 인덱스(index), 두번째 인자로 종료 인덱스) 값을 복사 반환
    
        let shortenResult = ""; // shhortenResult: 압축 후 문자열을 저장할 변수 - i가 커질 때마다 다시 계산할 수 있게 초기화 작업.

        // 문자열을 ***i개 단위로 잘라가며, 현재 단위 문자열(nowStr : ex. a)과 일치하는지 검증
        // j는 s의 인덱스
        for (let j = i; j < s.length; j += i) { // j += i로 단위 갯수에 맞추어 점프해서 검증할 수 있도록*
            
            // 검증할 문자열이 현재 단위 문자열과 일치하면 단위가 반복되는 횟수 1 증가
            if (s.slice(j, j + i) === nowStr) {
                cnt++;
            }
            
            // 일치하지 않으면.. 예시) s.slice(j,j+i)가 b이고, nowStr이 a라면
            else {
            // 압축 후 문자열에 단위가 반복되는 횟수(cnt)와 단위(nowStr)를 이어붙이고
                
                if (cnt === 1) shortenResult += nowStr; // cnt가 1이면 붙이지 않으니까 - 예시 a b 일 때, a
                else shortenResult += cnt + nowStr; // cnt가 2이상이면 붙인다. - aa b 일 때, 2a

                // 단위가 반복되는 횟수는 다시 1로 초기화 * 
                cnt = 1;
                // 현재 단위 문자열을 다음 문자로 업데이트해야 다음 문자열들과 검증할 수 있으니까
                nowStr = s.slice(j, j + i);
            }
        }

        // j 반복안에서는 전부 적용되지만, j반복 밖(마지막 녀석들)에서도 로직이 적용되게 하려면 여기에 적어줘야 함.
        // j 반복이 끝난 후( j < s.length; 범위 오버 ) 마지막으로 고려했던 단위 문자열도 압축 후 문자열에 이어붙여줘야 함
        // 예시) 3개 단위로 자르고 마지막에 남는 문자열(단위만큼 점프해서 붙여주고 난 나머지)은 그대로 붙여주는 로직.
        if (cnt === 1){
            shortenResult += nowStr;
        } else {
            shortenResult += cnt + nowStr;
        }

        // 최종 압축 후 문자열 길이의 최솟값 업데이트
        shortenLen = Math.min(shortenLen, shortenResult.length);
  }

  // 압축 후 문자열 길이의 최솟값 반환
  return shortenLen;
}
