import java.util.*;
class Solution {
    public int solution(int[] nums) {
        int answer = 0;
        // N/2를 찾는다
        int takeCount = nums.length / 2;
        // System.out.println(takeCount);

        // nums를 해시의 key값으로 넣는다
        Map<Integer,Integer> phonekemon = new HashMap<>();
        for(int num : nums){
            phonekemon.put(num,0);
        }


        int CountByTye = phonekemon.size();

        // key값과 N/2값을 비교하여 return한다
        return Math.min(CountByTye,takeCount);
    }
}