def solution(nums):
    answer = len(set(nums)) # 가질수 있는 포켓몬 중복x
    if answer > len(nums)/2:
        return len(nums)/2
    return answer
