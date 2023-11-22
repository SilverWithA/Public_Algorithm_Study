//정확성: 54.0
//합계: 54.0 / 100.0

import java.util.*;
class Solution {
    public int solution(String s) {
        List<Integer> lenList = new ArrayList<>();
        int answer = 0;
        StringBuffer sb = new StringBuffer(s);

        // 압출할 단위: unit 컨트롤
        for(int unit = 1 ; unit< sb.length()/2 + 1; unit++){
            int cnt = 1;
            int stringLen = sb.length();

            // unit 단위로 전체 문자열 탐색
            for(int i = 0; i < sb.length() - unit * 2 + 1; i+= unit){

                // 비교할 n번째 문자열
                String standard = sb.substring(i,i+unit);

                // 인접 문자열
                String next = sb.substring(i+unit, i+(unit*2));
                // System.out.println("i: "+i+" standard: "+standard+" next: "+next);

                if(standard.equals(next)){
                    // 첫번째 인접 문자열이 같을 때
                    cnt ++;
                    if(i == (sb.length() - unit * 2)){
                        // System.out.println("마지막 문자열");
                        stringLen = stringLen - (unit * (cnt-1)) + (String.valueOf(cnt).length());
                        // System.out.println(standard+"의 문자열 압축 후 길이: "+stringLen);
                    }
                }else{
                    if(i == 0){
                        break;
                    }

                    if(cnt > 1){
                        //문자열 압축
                        stringLen = stringLen - (unit * (cnt-1)) + (String.valueOf(cnt).length());
                        // System.out.println(standard+"의 문자열 압축 후 길이: "+stringLen);
                    }
                    cnt = 1; // 초기화
                    continue;
                }
            }
            // System.out.println("unit "+unit+"에 대한 압축이 끝났습니다.");
            // System.out.println("stringLen: " +stringLen);
            lenList.add(stringLen);
        }
        return Collections.min(lenList);
    }
}
