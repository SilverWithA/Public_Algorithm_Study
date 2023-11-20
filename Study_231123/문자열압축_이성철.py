# 문제 요약
# 문자열 s가 주어질 때, 
# 1 이상 len(s)이하의 압축 단위로 만들 수 있는 모든 압축 경우의 수 중에서
# 가장 짧은 길이를 리턴

def solution(s):
    res = []

    # i = 압축 단위 최소 ~ 최대 범위 
    for i in range(1, len(s)+1):

        temp_string = ''  # 임시 스트링 저장 (각 압축 단위 마다 생성될 최종 압축문자열 저장 공간)
        cnt = 1           # 압축 최소 횟수. 1
        check = s[:i]     # 현재 압축 해야 할 단위
        
        for j in range(i,len(s),i):
            # 같으면 카운트
            if check == s[j:j+i]:
                cnt += 1
            else:
                # 압축이 된 경우
                if cnt != 1:
                    temp_string += '{}{}'.format(cnt,check)
                # 안 된 경우
                else:
                    temp_string += check
                # 다음 압축 문자열 및 압축 횟수 초기화
                check = s[j:j+i]
                cnt = 1
                
        # 마지막 부분 처리
        if cnt != 1:
            temp_string+= '{}{}'.format(cnt,check)
        else:
            temp_string += check
            
        res.append(len(temp_string))

    return min(res)

