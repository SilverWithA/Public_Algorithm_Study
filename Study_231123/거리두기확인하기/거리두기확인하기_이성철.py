# 문제
# 5x5 행렬에서 맨해튼 거리 2 이하의 위치에 x가 존재하지 않으며, p가 존재하는 경우 0을 반환. 반대의 경우 1을 반환

# 조건
# 행렬의 크기 5x5 고정
# 맨허튼 거리 |r1 - r2| + |c1 - c2| -> 점 x,y 를 기준은 depth 2까지가 맨허튼 거리
# p의 위치에서 맨허튼 거리만큼 탐색하여 거리두기 지켰는지 확인

from collections import deque

def solution(places):
    res = []

    def bfs(place):
        p_loc = []

        # 이동좌표
        dx = [0,0,-1,1] # 1,-1,1,-1
        dy = [-1,1,0,0] # 1,-1,-1,1

        # p의 좌표 찾기        
        for i in range(5):
            for j in range(5):
                if place[i][j] == 'P':
                    p_loc.append([i,j])

        q = deque(p_loc)

        while q:
            x,y = q.popleft()

            # depth 1
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]

                # X면 해당 방향 탐색 안해도 됨 , o 이면 탐색 해야함, 배열 범위, 맨허튼 거리 안에 있는지
                if 0 <= nx < 5 and 0 <= ny < 5 and place[nx][ny] != 'X':
                    if place[nx][ny] == 'P':
                        return 0
                    
                    # depth 2
                    for j in range(4):
                        nnx = nx + dx[j]
                        nny = ny + dy[j]

                        if 0 <= nnx < 5 and 0 <= nny < 5 and not (nnx == x and nny == y):
                            if place[nnx][nny] == 'P':
                                return 0

        return 1

    for p in places:
        res.append(bfs(p))

    return res



places = [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
          ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
          ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
          ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
          ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]


res = solution(places)
print(res)
