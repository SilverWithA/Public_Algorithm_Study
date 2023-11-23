n = int(input())

answer = []
answer.append(0) # 처음시작은 0 고정이기에 저장
answer.append(1) # 두번째시작은 1 고정이기에 저장

for i in range(2,n+1):
    answer.append(answer[i-1] + answer[i-2])
    
print(answer[n])
