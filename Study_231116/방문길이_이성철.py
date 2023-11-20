# 중복제외 경로 길이 탐색 문제
# 0,0 -> 5,5에서 시작
from collections import deque

def solution(dirs):
    # 초기 좌표 값
    x, y = 0, 0
    
    # 방문 길이 집합.
    # 저장해야하는 구조 (x,y -> nx,ny)
    # 집합 구조의 특징 : 
    visited_dirs = set()
    
    for d in dirs:
        if d == 'U' and y < 5:
            visited_dirs.add(((x,y),(x, y+1)))
            y += 1
        elif d == 'D' and y > -5:
            visited_dirs.add(((x,y-1),(x, y)))
            y -= 1
        elif d == 'L' and x > -5:
            visited_dirs.add(((x-1,y),(x, y)))  
            x -= 1
        elif d == 'R' and x < 5:
            visited_dirs.add(((x,y),(x+1, y)))  
            x += 1
        else:
            continue
            
#    print(visited_dirs)
    return len(visited_dirs)
