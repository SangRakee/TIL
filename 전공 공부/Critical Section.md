# Critical Section

프로세스간에 공유자원을 접근하는데 있어서 문제가 발생하지 않도록 한번에 하나의 프로세스만 이용하게끔 보장하는 영역



**임계 영역 문제를 해결하기 위한 조건**

1. 상호배제 

2. 진행 : 들어가려는 프로세스가 여러개 일때 우선순위 부여

3. 한정대기 :  기아를 방지하기 위해 횟수를 제한

   

**임계 영역 동시 접근을 해결하기 위한 방법 **

1. 데커의 알고리즘 : 두 프로세스가 서로 통신하기 위해 공유메모리를 사용하여 충돌 없이 단일 자원을 공유할 수 있도록 허용
2. lock : 프로세스나 스레드가 자원을 사용하고 있는 동안 잠궈서 접근 못하게 하는거 0-True, 1-False
3. 뮤텍스 :  lock과 비슷하지만 context switching이 가능하여 병렬처리 가능
4. 세마포어 0-False, 1-True, 2...-True
5. 모니터



출처 : https://hombody.tistory.com/240