function solution(nums) {
    // 최대한 다양한 종류 폰켓몬을 원함 총 N마리에서 N/2마리 가져가는 경우의 수
    // 가장 많은 종류의 폰켓몬 선택하는 방법을 찾고, 그 때의 폰켓몬 종류 번호의 개수(경우의 수)를 return
    
    const set = new Set(nums); // 배열을 set로
    const types = set.size;
    
    // 이 종류의 갯수에서 nums.length/2를 조합(순서X, 중복제거)으로 뽑으면 되는거 아닌가?
    
    // 조합 함수 코드
    // 어? 조합이고 나발이고가 필요없네?
    // 최대로 가질 수 있는 값이 nums.length / 2이고,
    // n마리중에서 n/2마리만 가져오면 되는거니까, 경우의 수 문제가 아니었네 그것 중 최대
    
    limit = nums.length/2;
    
    // 종류의 수가 최대보다 크면 limit 값을 리턴, 아니면 종류의 수 리턴하면 예외가 없잖아
    return types > limit ? limit : types 
}
