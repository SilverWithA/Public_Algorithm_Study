package 피보나치수2;

import java.util.Scanner;

public class 피보나치수2{

    static long[] arr;

    public static void main(String[] args){
        // 값 input
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        // 피보나치수를 저장할 arr의 길이 결정 - 입력한 값만큼 할당
        arr = new long[n+1];

        for(int i=0;i<n+1;i++){
            arr[i]= -1;
        }


        arr[0] = 0;
        arr[1] = 1;

        // n번째 피보나치 수 출력
        System.out.println(Fib(n));
    }

    // Fib 매서드(함수) 정의 - 재귀호출
    public static long Fib(int n){
        if(arr[n] == -1){
            arr[n] = Fib(n - 1) + Fib(n - 2);
        }
        return arr[n];
    }

}
