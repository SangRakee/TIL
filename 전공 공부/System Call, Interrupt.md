# 시스템 콜

### 정의

운영체제의 커널이 제공하는 서비스에 대해, 응용 프로그램의 요청에 따라 커널에 접근하기 위한 인터페이스

사용자 모드에서 커널 모드로 사용하기 위해서

1. 프로세서 제어
2. 파일 조작
3. 장치 관리
4. 정보 유지
5. 통신

- 사용자 모드
- 커널 모드



# 인터럽트

프로그램이 컴퓨터에서 동작하고 있을 때, 입출력 연산 혹은 예외상황이 발생하여 처리가 필요할때 이를 마이크로 프로세서에게 알려 처리를 할 수 있도록 하는 것

인터럽트가 발생하면 현재 위치가 자동으로 스택에 복귀주소를 저장하고 인터럽트가 끝나면 복귀 주소로 돌아간다

- 외부 인터럽트
- 내부 인터럽트

