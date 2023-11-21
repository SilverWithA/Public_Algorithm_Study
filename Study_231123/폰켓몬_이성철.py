# 가져갈 수 있

def solution(nums):
    n = set(nums) # 가질 수 있는 총 폰켓몬 개수 (중복제거)
    # n = 유니크 폰켓몬 , nums = 총 폰켓몬 개수
    if (len(nums) // 2) < len(n): # 가져갈 수 있는 폰켓몬 < 유니크 폰켓몬 -> 가져갈 수 있는 max 값은 결국 nums //2 
        return len(nums) // 2 # 
    else: # 반대의 경우 모든 폰켓몬을 가져갈 수 있음
        return len(n) 
