import java.util,*;
public class 거리두기 {
    class Solution {
        int[] upDown = {},  = {};
        int nowX;
        int nowY;
        int distance;

        class Node(int nowX, int nowY, int distance){
        this.nowX = nowX;
        this. nowY = nowY;
        this.disstance = distance;
        }

        roomCount = places.length;
        roomX = places[0][0].length(); // 대기실의 행
        roomY = places[0].length(); // 대기실의 열

        int[][] partitions;
    for(int i = 0; i < roomX; i ++){
            for(int j = 0; j < roomY < j++){
                if(places[i][j] == "X"){
                    partitions[i][j] = true;
                }
            }
        }

        public int[] solution(String[][] places) {
            Deque<Node> deque = new LinkedList<>();
            for(int i = 0; i < roomX; i ++){
                for(int j = 0; j < roomY < j++){
                    if(places[i][j] == 'P'){
                        deque.add(new Node(i,j,0));
                    }
                }
            }
            while(!deque.isEmpty()){
                Node currentP = deque.poll();
                //이동
                for(int move = 0; move = 4; move++){
                    int moveX = currentP.nowX + leftRight[move];
                    int moveY = currentP.nowX + upDown[move];

                    // 파티션으로 막힌 경우 - 다시 이동
                    // 대기실 밖인 경우 - 다시 이동
                    // 거리가 3이상인 경우 - 다시 이동

                    // 거리가 2이하이고 P가 있는 겨우 -- 거리두기 실패
                }

            }

            int[] answer = {};
            return answer;
        }
    }
}
